package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

enum Comp_Type {
	C, S, I, E
}

enum Is_Configurable {
	N, Y
}

@Entity
@Table(name = "Vehicle")
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int confi_id;

	@ManyToOne
	@JoinColumn(name = "comp_id", nullable = false)
	private Component component;
	
	@ManyToOne
	@JoinColumn(name = "model_id")
	private Model model ;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Comp_Type comp_type;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Is_Configurable is_configrable;

	public int getConfi_id() {
		return confi_id;
	}

	public void setConfi_id(int confi_id) {
		this.confi_id = confi_id;
	}

	public Component getComponent() {
		return component;
	}

	public void setComponent(Component component) {
		this.component = component;
	}

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}

	public Comp_Type getComp_type() {
		return comp_type;
	}

	public void setComp_type(Comp_Type comp_type) {
		this.comp_type = comp_type;
	}

	public Is_Configurable getIs_configrable() {
		return is_configrable;
	}

	public void setIs_configrable(Is_Configurable is_configrable) {
		this.is_configrable = is_configrable;
	}

	@Override
	public String toString() {
		return "Vehicle [confi_id=" + confi_id + ", component=" + component + ", model=" + model + ", comp_type="
				+ comp_type + ", is_configrable=" + is_configrable + "]";
	}
	
	


}