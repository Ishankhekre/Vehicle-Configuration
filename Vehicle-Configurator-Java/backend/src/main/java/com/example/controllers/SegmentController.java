package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Segment;
import com.example.services.SegmentManager;

@RestController
@RequestMapping("/api/segment")
@CrossOrigin(origins = {"http://localhost:3000", "http://165.232.182.201:5000", "http://www.vconfig.site"})
public class SegmentController {
	
	@Autowired
	SegmentManager manager;
	
	@GetMapping(value = "/segments")
	public List<Segment> getSegments()
	{
		return manager.getSegments();
	}

}
