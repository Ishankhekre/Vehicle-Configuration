package com.example.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "user", uniqueConstraints = { @UniqueConstraint(columnNames = "username") })
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId; // Primary Key

	@Column(nullable = false, unique = true)
//    @NotBlank
//    @Size(min = 4, max = 50, message = "Username must be between 4 and 50 characters.")
	private String username; // Unique Username

	@Column(nullable = false)
//    @NotBlank
//    @Size(min = 8, message = "Password must be at least 8 characters long.")
	private String password; // Encrypted Password

	@Column(nullable = false)
//  @NotBlank
	private String authorizedPersonName; // Name of Authorized Person

	@Column(nullable = false)
	// @NotBlank
	private String designation; // Designation of the Authorized Person

	@Column(nullable = false)
//    @NotBlank
	private String companyName; // Company Name

	@Column(nullable = false, unique = true)
//    @NotBlank
//    @Pattern(regexp = "\\d{15}", message = "GST number must be 15 digits.")
	private String gstNumber; // GST Number

	@Column(nullable = false, unique = true)
//    @NotBlank
//    @Email(message = "Please provide a valid email address.")
	private String email; // Email Address

	@Column(nullable = false)
//    @NotBlank
//    @Pattern(regexp = "\\d{10}", message = "Contact number must be 10 digits.")
	private String contactNumber; // Contact Number

	@Column(nullable= true)
//    @Pattern(regexp = "\\d{10,12}", message = "Telephone number must be between 10 to 12 digits.")
	private String telephone; // Telephone (Optional)

	@Column(nullable = false)
//    @NotBlank
	private String addressLine1; // Address Line 1

	private String addressLine2; // Address Line 2 (Optional)

	@Column(nullable = false)
	// @NotBlank
	private String city; // City

	@Column(nullable = false)
	// @NotBlank
	private String state; // State

	@Column(nullable = false)
//    @NotBlank
//    @Pattern(regexp = "\\d{6}", message = "Pincode must be 6 digits.")
	private String pincode; // Pincode

	// Getters and Setters
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAuthorizedPersonName() {
		return authorizedPersonName;
	}

	public void setAuthorizedPersonName(String authorizedPersonName) {
		this.authorizedPersonName = authorizedPersonName;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getGstNumber() {
		return gstNumber;
	}

	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

//	public User(
//			@NotBlank @Size(min = 4, max = 50, message = "Username must be between 4 and 50 characters.") String username,
//			@NotBlank @Size(min = 8, message = "Password must be at least 8 characters long.") String password) {
//		super();
//		this.username = username;
//		this.password = password;
//	}

	public User() {
		super();
	}

	public User(Long userId, String username, String password, String authorizedPersonName, String designation,
			String companyName, String gstNumber, String email, String contactNumber, String telephone,
			String addressLine1, String addressLine2, String city, String state, String pincode) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.authorizedPersonName = authorizedPersonName;
		this.designation = designation;
		this.companyName = companyName;
		this.gstNumber = gstNumber;
		this.email = email;
		this.contactNumber = contactNumber;
		this.telephone = telephone;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password
				+ ", authorizedPersonName=" + authorizedPersonName + ", designation=" + designation + ", companyName="
				+ companyName + ", gstNumber=" + gstNumber + ", email=" + email + ", contactNumber=" + contactNumber
				+ ", telephone=" + telephone + ", addressLine1=" + addressLine1 + ", addressLine2=" + addressLine2
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}
	
	

}
