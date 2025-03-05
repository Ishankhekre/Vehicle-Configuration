package com.example.entities;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "invoice")
public class Invoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "inv_id")
	private int inv_id;
	
	@Column(name = "inv_date")
	private Date inv_date;

	// private int model_id;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "model_id", referencedColumnName = "model_id")
	private Model model;

	@Column(name = "component_details")
	private List<String> component_details;

	public int getInv_id() {
		return inv_id;
	}

	public void setInv_id(int inv_id) {
		this.inv_id = inv_id;
	}

	public Date getInv_date() {
		return inv_date;
	}

	public void setInv_date(Date inv_date) {
		this.inv_date = inv_date;
	}

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}

	public List<String> getComponent_details() {
		return component_details;
	}

	public void setComponent_details(List<String> component_details) {
		this.component_details = component_details;
	}

	public Double getAmt() {
		return amt;
	}

	public void setAmt(Double amt) {
		this.amt = amt;
	}

	public Double getTax() {
		return tax;
	}

	public void setTax(Double tax) {
		this.tax = tax;
	}

	public Double getTotal_amt() {
		return total_amt;
	}

	public void setTotal_amt(Double total_amt) {
		this.total_amt = total_amt;
	}

	@Column(name = "amt")
	private Double amt;

	@Column(name = "tax")
	private Double tax;

	@Column(name = "total_amt")
	private Double total_amt;

}