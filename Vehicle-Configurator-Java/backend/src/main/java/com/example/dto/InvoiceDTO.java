package com.example.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class InvoiceDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonIgnore
	private long id;

	@Column(nullable = false, name = "InvoiceNumber")
	private String InvoiceNumber;

	private String username;

	@Column(nullable = false)
	private String manufacturer;

	@Column(nullable = false, name = "modelName")
	private String modelName;

	@ElementCollection
	private List<String> components;
	@Column(nullable = false)
	private String segment;
	@Column(nullable = false, name = "basePrice")
	private double basePrice;
	@Column(nullable = false)
	private double tax;
	@Column(nullable = false)
	private int quantity;
	@Column(nullable = false, name = "totalPrice")
	private double totalPrice;
	@Column(nullable = false, name = "finalTotalPrice")
	private double finalTotalPrice;

	@ManyToOne
	@JoinColumn(name = "user_name", referencedColumnName = "userName", nullable = false)
	private UserDTO user;

	public String getInvoiceNumber() {
		return InvoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		InvoiceNumber = invoiceNumber;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public List<String> getComponents() {
		return components;
	}

	public void setComponents(List<String> components) {
		this.components = components;
	}

	public String getSegment() {
		return segment;
	}

	public void setSegment(String segment) {
		this.segment = segment;
	}

	public double getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(double basePrice) {
		this.basePrice = basePrice;
	}

	public double getTax() {
		return tax;
	}

	public void setTax(double tax) {
		this.tax = tax;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public double getFinalTotalPrice() {
		return finalTotalPrice;
	}

	public void setFinalTotalPrice(double finalTotalPrice) {
		this.finalTotalPrice = finalTotalPrice;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public InvoiceDTO(String invoiceNumber, String username, String manufacturer, String modelName,
			List<String> components, String segment, double basePrice, double tax, int quantity, double totalPrice,
			double finalTotalPrice) {
		super();
		InvoiceNumber = invoiceNumber;
		this.username = username;
		this.manufacturer = manufacturer;
		this.modelName = modelName;
		this.components = components;
		this.segment = segment;
		this.basePrice = basePrice;
		this.tax = tax;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.finalTotalPrice = finalTotalPrice;
	}

	public InvoiceDTO(String invoiceNumber, String manufacturer, String modelName, List<String> components,
			String segment, double basePrice, double tax, int quantity, double totalPrice, double finalTotalPrice,
			UserDTO user) {
		super();
		InvoiceNumber = invoiceNumber;
		this.manufacturer = manufacturer;
		this.modelName = modelName;
		this.components = components;
		this.segment = segment;
		this.basePrice = basePrice;
		this.tax = tax;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.finalTotalPrice = finalTotalPrice;
		this.user = user;
	}

	@Override
	public String toString() {
		return "InvoiceDTO [InvoiceNumber=" + InvoiceNumber + ", username=" + username + ", manufacturer="
				+ manufacturer + ", modelName=" + modelName + ", components=" + components + ", segment=" + segment
				+ ", basePrice=" + basePrice + ", tax=" + tax + ", quantity=" + quantity + ", totalPrice=" + totalPrice
				+ ", finalTotalPrice=" + finalTotalPrice + ", user=" + user + "]";
	}

	public InvoiceDTO() {
		super();
	}

}
