package com.example.dto;

public class ModelDTO {
	
	private String modelName;
	private String SegmentName;
	public String getModelName() {
		return modelName;
	}
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	public String getSegmentName() {
		return SegmentName;
	}
	public void setSegmentName(String segmentName) {
		SegmentName = segmentName;
	}
	public ModelDTO(String modelName, String segmentName) {
		super();
		this.modelName = modelName;
		SegmentName = segmentName;
	}
	public ModelDTO(String modelName) {
		super();
		this.modelName = modelName;
	}
	
	
	
	

}
