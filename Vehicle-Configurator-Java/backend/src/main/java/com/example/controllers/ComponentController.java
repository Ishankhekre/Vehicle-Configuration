package com.example.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Component;
import com.example.services.ComponentManager;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/component")

@CrossOrigin(origins = {"http://localhost:3000", "http://165.232.182.201:5000", "http://www.vconfig.site"})

public class ComponentController {
	
	@Autowired
	ComponentManager componentmanager;
	
	@GetMapping("/componentByCompId/{comp_id}")
	public Optional<Component> componentByCompId(@PathVariable int comp_id) {
		return componentmanager.getByComp_id(comp_id);
	}
	

}
