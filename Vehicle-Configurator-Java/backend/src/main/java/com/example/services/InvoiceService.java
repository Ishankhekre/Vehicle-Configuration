package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.ComponentDTO;
import com.example.dto.InvoiceDTO;
import com.example.dto.ModelDTO;
import com.example.dto.UserDTO;
import com.example.entities.User;
import com.example.repository.InvoiceRepository;
import com.example.repository.UserDtoRepository;
import com.example.repository.UserRepository;

@Service
public class InvoiceService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	InvoiceRepository invoiceRepository;

	@Autowired
	UserDtoRepository userDtoRepository;

	public InvoiceDTO generateInvoie(InvoiceDTO invoice) {

		String invoiceNumber = invoice.getInvoiceNumber();
		String manufacturer = invoice.getManufacturer();
		String modelname = invoice.getModelName();
		List<String> componentList = invoice.getComponents();
		String segment = invoice.getSegment();

		double baseprice = invoice.getBasePrice();
		double tax = invoice.getTax();
		int quantity = invoice.getQuantity();
		double totalPrice = invoice.getTotalPrice();
		double finalTotalPrice = invoice.getFinalTotalPrice();

		User user = userRepository.findByUsername(invoice.getUsername());

		UserDTO userDTO = new UserDTO(user.getUsername(), user.getCompanyName(), user.getEmail(), user.getGstNumber(),
				user.getContactNumber());

		UserDTO existingUser = userDtoRepository.findByUserName(invoice.getUsername());
		if (existingUser == null) {
			userDtoRepository.save(userDTO);
		} else {
			userDTO = existingUser;
		}

		invoice.setUser(userDTO);
		invoice.setInvoiceNumber(invoiceNumber);
		invoice.setManufacturer(manufacturer);
		invoice.setModelName(modelname);
		invoice.setComponents(componentList);
		invoice.setSegment(segment);
		invoice.setBasePrice(baseprice);
		invoice.setTax(tax);
		invoice.setQuantity(quantity);
		invoice.setTotalPrice(totalPrice);
		invoice.setFinalTotalPrice(finalTotalPrice);

		invoiceRepository.save(invoice);

		return invoice;
	}

	public List<InvoiceDTO> gethistory(String username) {

		return invoiceRepository.findByUserName(username);

	}

}
