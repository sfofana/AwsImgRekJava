package com.sfofana.app.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.sfofana.app.model.Credentials;
import com.sfofana.app.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
	
//	@Value("${secret-key}")
//	private String secretKey;
	@Autowired
	private Credentials credentials;
	
	public String extractUser(String token) throws Exception {
		try {
			return extractClaim(token, Claims::getSubject);
		} catch (Exception e) {
			throw new Exception("User not found");
		}
		
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}
	
	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	public Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(credentials.getKey()).parseClaimsJws(token).getBody();
	}
	
	private Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}

	public String generateToken(User user) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, user.getRole());
	}
	
	public String createToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
				.signWith(SignatureAlgorithm.HS256, credentials.getKey()).compact();
	}
	
	public Boolean validateToken(String token, User user) throws Exception{
		String email;
		try {
			email = extractUser(token);
			return (email.equals(user.getRole()) && !isTokenExpired(token));
		} catch (Exception e) {
			throw new Exception("Token expired");
		}
		
	}
}