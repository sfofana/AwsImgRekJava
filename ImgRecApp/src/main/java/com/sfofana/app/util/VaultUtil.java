package com.sfofana.app.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sfofana.app.model.Credentials;

/**
 * @author Sufyan Fofana
 * @version 1.0
 *
 */
@Component
public class VaultUtil {

	private Logger log = LoggerFactory.getLogger(VaultUtil.class);

	@Autowired
	ObjectMapper objectMapper;
	
	private String keyName = "/secret/key";
	private String encryption = "/secret/vault";
	private String path = System.getProperty("user.dir");
	
	/**
	 * @return Decrypts file converts to string and returns that as a pojo
	 * @throws IOException
	 * @throws InvalidKeyException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 * @throws NoSuchPaddingException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 */
	public Credentials decrypt() throws IOException, InvalidKeyException, NoSuchAlgorithmException, InvalidKeySpecException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException {
		log.info("========= [ Decrypt Envoked ]");

		File keyFile = new File(path+keyName);
		File encrypted = new File(path+encryption);
		byte[] key = Files.readAllBytes(keyFile.toPath());
		
		DESKeySpec keySpec = new DESKeySpec(key);
		SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
		SecretKey secretKey = keyFactory.generateSecret(keySpec);
		
		Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
		
		cipher.init(Cipher.DECRYPT_MODE, secretKey, SecureRandom.getInstance("SHA1PRNG"));
		byte[] decrypted = cipher.doFinal(Files.readAllBytes(encrypted.toPath()));
		return jsonStringToObject(new String(decrypted), Credentials.class);
	}
	
	/**
	 * @param <T> Any pojo can be used
	 * @param json Any JSON in string format can be used
	 * @param clazz Same class as pojo used
	 * @return Full cooked JSON string to pojo using object mapped
	 * @throws JsonMappingException
	 * @throws JsonProcessingException
	 */
	private <T> T jsonStringToObject(String json, Class<T> clazz) throws JsonMappingException, JsonProcessingException{
		log.info("========= [ JsonStringToObject Envoked ]");

		return objectMapper.readValue(json, clazz);
	}
}
