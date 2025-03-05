package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "invoice_Detail")
public class Invoice_Detail {
	
	@Id 
	@Column(name="invdtl_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int invDtl_id ;
	
	@ManyToOne
	@JoinColumn(name = "inv_id",nullable = false)
	private Invoice invoice;
	
	@ManyToOne
	@JoinColumn(name = "comp_id",nullable = false)
	private Component component;

	public int getInvDtl_id() {
		return invDtl_id;
	}

	public void setInvDtl_id(int invDtl_id) {
		this.invDtl_id = invDtl_id;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public Component getComponent() {
		return component;
	}

	public void setComponent(Component component) {
		this.component = component;
	}

	@Override
	public String toString() {
		return "Invoice_Detail [invDtl_id=" + invDtl_id + ", invoice=" + invoice + ", component=" + component + "]";
	}
	
	
}