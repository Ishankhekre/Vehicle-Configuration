package com.example.controllers;


import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.function.ObjDoubleConsumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.InvoiceDTO;
import com.example.services.EmailService;
import com.example.services.InvoicePdfManager;
import com.example.services.InvoiceService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://165.232.182.201:5000", "http://www.vconfig.site"})
public class InvoiceController {

	@Autowired
	private InvoiceService invoiceservice;

	
	@Autowired
	InvoicePdfManager invoicepdfmaker;
	
	@Autowired
	EmailService emailservice;
	


	@PostMapping(value = "/generateInvoice")
	public ResponseEntity<InvoiceDTO> generateInvoice(@RequestBody InvoiceDTO invoice) {

		System.out.println("Abcd"+invoice);

		InvoiceDTO objDto = invoiceservice.generateInvoie(invoice);
		System.out.println(objDto);

		
		try {
			invoicepdfmaker.invoicePdf(objDto);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String path = objDto.getInvoiceNumber()+".pdf";

		emailservice.invoiceEmail(objDto.getUser().getEmail(), objDto.getUser().getCompanyName(), objDto.getInvoiceNumber(), objDto.getFinalTotalPrice(), new File(path));

		return ResponseEntity.ok(objDto);
	}

	@GetMapping(value = "/gethistory/{username}")
	public ResponseEntity<List<InvoiceDTO>> getInvoiceHistory(@PathVariable String username) {
		
		List<InvoiceDTO> history = invoiceservice.gethistory(username);
		if (!history.isEmpty()) 
		{
			return ResponseEntity.ok(history);
		} 
		else 
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

}
