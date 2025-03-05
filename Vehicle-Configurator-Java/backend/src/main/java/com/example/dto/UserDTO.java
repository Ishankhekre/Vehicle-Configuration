package com.example.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userid;

	@Column(nullable = false, unique = true)
	private String userName;

	@Column(nullable = false)
	private String companyName;

	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private String gstNumber;

	@Column(nullable = false)
	private String contactNumber;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGstNumber() {
		return gstNumber;
	}

	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public UserDTO(Long id, String userName, String companyName, String email, String gstNumber, String contactNumber) {
		super();
		this.userid = id;
		this.userName = userName;
		this.companyName = companyName;
		this.email = email;
		this.gstNumber = gstNumber;
		this.contactNumber = contactNumber;
	}

	public UserDTO(String username, String companyName, String email, String gstNumber, String contactNumber) {
		super();
		this.userName = username;
		this.companyName = companyName;
		this.email = email;
		this.gstNumber = gstNumber;
		this.contactNumber = contactNumber;
	}

	public UserDTO() {
		super();
	}

}
