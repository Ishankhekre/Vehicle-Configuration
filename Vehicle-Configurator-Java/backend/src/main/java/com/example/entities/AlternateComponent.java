package com.example.entities;

import org.springframework.context.annotation.Configuration;

import jakarta.persistence.*;

@Entity
@Table(name = "alternate_component")
@Configuration
public class AlternateComponent {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int alt_id; // 

	@ManyToOne
	@JoinColumn(name = "model_id", nullable = false)
	private Model model_id; //

	@ManyToOne
	@JoinColumn(name = "comp_id", nullable =  false)
	private Component comp_id; //
	
	@ManyToOne
	@JoinColumn(name = "alt_comp_id", nullable =  false)
	private Component alt_comp_id;  //

	@Column(nullable = false)
	private double delta_price; //

	public int getAlt_id() {
		return alt_id;
	}

	public void setAlt_id(int alt_id) {
		this.alt_id = alt_id;
	}

	public Model getModel_id() {
		return model_id;
	}

	public void setModel_id(Model model_id) {
		this.model_id = model_id;
	}

	public Component getComp_id() {
		return comp_id;
	}

	public void setComp_id(Component comp_id) {
		this.comp_id = comp_id;
	}

	public Component getAlt_comp_id() {
		return alt_comp_id;
	}

	public void setAlt_comp_id(Component alt_comp_id) {
		this.alt_comp_id = alt_comp_id;
	}

	public double getDelta_price() {
		return delta_price;
	}

	public void setDelta_price(double delta_price) {
		this.delta_price = delta_price;
	}

	@Override
	public String toString() {
		return "AlternateComponent [alt_id=" + alt_id + ", model_id=" + model_id + ", comp_id=" + comp_id
				+ ", alt_comp_id=" + alt_comp_id + ", delta_price=" + delta_price + "]";
	}

}