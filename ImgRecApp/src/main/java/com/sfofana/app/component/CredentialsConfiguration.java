package com.sfofana.app.component;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.sfofana.app.model.Credentials;
import com.sfofana.app.util.VaultUtil;

@Configuration
public class CredentialsConfiguration {

	@Autowired
	private VaultUtil vaultUtil;
	
	@Bean
	public Credentials getCredentials() throws InvalidKeyException, NoSuchAlgorithmException, InvalidKeySpecException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, IOException {
		return vaultUtil.decrypt();
	}
}