package com.sfofana.app.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

	private Logger log = LoggerFactory.getLogger(SecurityConfiguration.class);

	@Autowired
	private Credentials credentials;
	
	/** Global REST configuration with basic authentication required
	 * @param auth Built authentication using username password and role
	 * @throws Exception
	 */
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		log.info("========= [ ConfigureGlobal Envoked ]");

		auth.inMemoryAuthentication().withUser(credentials.getUsername())
		.password(passwordEncoder().encode(credentials.getPassword()))
		.roles("User");
	}
	
	/**
	 * Overrides http security allowing a user to access all controllers
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		log.info("========= [ Configure Envoked ]");

		http.csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**")
		.permitAll().anyRequest().authenticated()
		.and().httpBasic();
	}
	
	/**
	 * @return Returns an object used for decoding or encoding data
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		log.info("========= [ PasswordEncoder Envoked ]");

		return new BCryptPasswordEncoder();
	}
}