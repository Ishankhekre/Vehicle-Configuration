package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "manufacturer")
public class Manufacturer {
	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mfg_id;

	@Column(nullable = false)
	private String mfg_name;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "seg_id", nullable = false)
	private Segment segment;

	public String getMfg_name() {
		return mfg_name;
	}

	public void setMfg_name(String mfg_name) {
		this.mfg_name = mfg_name;
	}

	public Segment getSeg_id() {
		return segment;
	}

	public void setSeg_id(Segment segment) {
		this.segment = segment;
	}

	public int getMfg_id() {
		return mfg_id;
	}

	public void setMfg_id(int mfg_id) {
		this.mfg_id = mfg_id;
	}

}