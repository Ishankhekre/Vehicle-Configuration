package com.example.entities;

import jakarta.persistence.*;

@Entity

@Table(name = "Component")
public class Component {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int comp_id;

	public int getComp_id() {
		return comp_id;
	}

	public void setComp_id(int comp_id) {
		this.comp_id = comp_id;
	}

	private String comp_name;

	public String getComp_name() {
		return comp_name;
	}

	public void setComp_name(String comp_name) {
		this.comp_name = comp_name;
	}

}
