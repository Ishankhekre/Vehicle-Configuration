package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Segment;
import com.example.repository.SegmentRepository;

@Service
public class SegmentManagerImpl implements SegmentManager  {
	
	@Autowired
	SegmentRepository segmentrepository;

	@Override
	public List<Segment> getSegments() {
		
		return segmentrepository.findAll();
		
	}
	
	

}
