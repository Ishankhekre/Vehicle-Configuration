package com.example.services;

import java.io.File;

public interface EmailService {
	
	void sendEmail(String to , String subject , String message);
	
	void registeredEmail(String to, String user, String username);
	
	void invoiceEmail(String to , String compName ,String invoiceNumber ,double Amount,  File file);
}
