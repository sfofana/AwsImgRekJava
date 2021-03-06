package com.sfofana.app.component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.sfofana.app.model.Credentials;

import springfox.documentation.builders.AuthorizationCodeGrantBuilder;
import springfox.documentation.builders.OAuthBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.BasicAuth;
import springfox.documentation.service.GrantType;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.service.TokenEndpoint;
import springfox.documentation.service.TokenRequestEndpoint;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.SecurityConfigurationBuilder;
/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@Component
public class SwaggerConfiguration {

	private Logger log = LoggerFactory.getLogger(SwaggerConfiguration.class);

	@Autowired
	private Credentials credentials;
	
	/**
	 * @return All necessary build configurations for a Docket,
	 * also including a custom security scheme
	 */
	@Bean
	public Docket swaggerConfig() {
		log.info("========= [ SwaggerConfig Envoked ]");

		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.ant("/**"))
				.apis(RequestHandlerSelectors.basePackage("com.sfofana.app"))
				.build()
		        .securitySchemes(securityScheme())
		        ;
	}
	
	/**
	 * @return Basic authentication builder for Swagger documentation API
	 */
	@Bean
	public springfox.documentation.swagger.web.SecurityConfiguration security(){
		log.info("========= [ SecurityConfiguration Envoked ]");

		return SecurityConfigurationBuilder.builder()
		        .clientId(credentials.getUsername())
		        .clientSecret(credentials.getPassword())
		        .scopeSeparator(" ")
		        .useBasicAuthenticationWithAccessCodeGrant(true)
		        .build();
	}
	
	private List<SecurityScheme> securityScheme() {
		log.info("========= [ SecurityScheme Envoked ]");

		List<SecurityScheme> scheme = new ArrayList<>();
		 GrantType grantType = new AuthorizationCodeGrantBuilder()
			        .tokenEndpoint(new TokenEndpoint("swagger-ui.html#/", "oauthtoken"))
			        .tokenRequestEndpoint(
			          new TokenRequestEndpoint("swagger-ui.html#/", credentials.getUsername(), credentials.getPassword()))
			        .build();
			 
			    SecurityScheme oauth = new OAuthBuilder().name("spring_oauth")
			        .grantTypes(Arrays.asList(grantType))
			        .scopes(Arrays.asList(scopes()))
			        .build();
			    SecurityScheme basic = new BasicAuth("basicAuth");
			    scheme.add(basic);
			    scheme.add(oauth);
			    return scheme;
	}
	
	private AuthorizationScope[] scopes() {
		log.info("========= [ AuthorizationScope Envoked ]");

	    AuthorizationScope[] scopes = { 
	      new AuthorizationScope("read", "for read operations"), 
	      new AuthorizationScope("write", "for write operations"), 
	      new AuthorizationScope("foo", "Access foo API") };
	    return scopes;
	}
	
}
