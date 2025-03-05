package com.example.dto;

import java.util.List;

public class ComponentDTO {
	
	private List<String> componentName;
	private int deltaPrice;

	public List<String> getComponentName() {
		return componentName;
	}

	public void setComponentName(List<String> componentName) {
		this.componentName = componentName;
	}

	public int getDeltaPrice() {
		return deltaPrice;
	}

	public void setDeltaPrice(int deltaPrice) {
		this.deltaPrice = deltaPrice;
	}

	public ComponentDTO(List<String> componentName, int deltaPrice) {
		super();
		this.componentName = componentName;
		this.deltaPrice = deltaPrice;
	}

	public ComponentDTO(List<String> componentName) {
		super();
		this.componentName = componentName;
	}
	
	
	
	

}
