package com.sfofana.app.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sfofana.app.model.Credentials;

/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Autowired
	private Credentials credentials;
	
	/** Global REST configuration with basic authentication required
	 * @param auth Built authentication using username password and role
	 * @throws Exception
	 */
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser(credentials.getUsername())
		.password(passwordEncoder().encode(credentials.getPassword()))
		.roles("User");
		System.out.println(System.getProperty("user.dir"));
	}
	
	/**
	 * Overrides http security allowing a user to access all controllers
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**")
		.permitAll().anyRequest().authenticated()
		.and().httpBasic();
	}
	
	/**
	 * @return Returns an object used for decoding or encoding data
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}