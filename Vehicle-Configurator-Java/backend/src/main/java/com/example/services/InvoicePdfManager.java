package com.example.services;

import java.io.IOException;

import com.example.dto.InvoiceDTO;

public interface InvoicePdfManager {
	
	public void invoicePdf(InvoiceDTO invoiceinfo)throws IOException;
}
