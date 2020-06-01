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
/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@Configuration
public class CredentialsConfiguration {

	@Autowired
	private VaultUtil vaultUtil;
	
	/**
	 * @return Returns the provided decrypt method for extracting credentials
	 * @throws InvalidKeyException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 * @throws NoSuchPaddingException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws IOException
	 */
	@Bean
	public Credentials getCredentials() throws InvalidKeyException, NoSuchAlgorithmException, InvalidKeySpecException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, IOException {
		return vaultUtil.decrypt();
	}
}
