package com.sfofana.app.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.CipherOutputStream;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sfofana.app.model.Credentials;

@Component
public class VaultUtil {
	
	@Autowired
	ObjectMapper objectMapper;
	
	private String keyName = "/secret/key";
	private String encryption = "/secret/vault";
	private String path = "/home/ec2-user";
	
	public Credentials decrypt() throws IOException, InvalidKeyException, NoSuchAlgorithmException, InvalidKeySpecException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException {
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
	
	private <T> T jsonStringToObject(String json, Class<T> clazz) throws JsonMappingException, JsonProcessingException{
		return objectMapper.readValue(json, clazz);
	}
}
