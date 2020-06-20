package com.sfofana.app.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sfofana.app.exception.BusinessException;
import com.sfofana.app.model.Credentials;
import com.sfofana.app.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@Component
public class JwtUtil {

	@Autowired
	private Credentials credentials;
	
	/**
	 * @param token Get user role based on token
	 * @return Returns user role if valid
	 * @throws BusinessException
	 */
	public String extractUser(String token) throws BusinessException {
		return extractClaim(token, Claims::getSubject);
	}
	
	/**
	 * @param token Gets expiration time based on token
	 * @return Returns date if not expired
	 */
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}
	
	/**
	 * @param <T> Any object return type, in this case string for extract user and date for extract expiration
	 * @param token Gets needed claims based on given argument function
	 * @param claimsResolver placeholder for Claims methods to be used
	 * @return Returns claims functionality on request
	 */
	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	/**
	 * @param token String carrying claims details
	 * @return Claims extracted from token
	 */
	public Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(credentials.getKey()).parseClaimsJws(token).getBody();
	}
	
	/**
	 * @param token String carrying expiration details
	 * @return True when expiration is within timeframe
	 */
	private Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}

	/**
	 * @param user Used to determine user role
	 * @return Token generated based on user role
	 */
	public String generateToken(User user) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, user.getRole());
	}
	
	/**
	 * @param claims Carries claimed subject and expiration date
	 * @param subject String describing user role
	 * @return Token set with claims expiration date and user as subject
	 */
	public String createToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
				.signWith(SignatureAlgorithm.HS256, credentials.getKey()).compact();
	}
	
	/**
	 * @param token String carrying claims details
	 * @param user Carries role
	 * @return True only if role of user is the same as claims and is not expired
	 * @throws BusinessException
	 */
	public Boolean validateToken(String token, User user) throws BusinessException{
		String email = extractUser(token);
		return (email.equals(user.getRole()) && !isTokenExpired(token));
	}
}
