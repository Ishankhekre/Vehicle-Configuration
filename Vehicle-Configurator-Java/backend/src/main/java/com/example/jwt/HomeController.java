package com.example.jwt;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController

public class HomeController {
	
	@GetMapping("/public")
	public String display() {
		return "Welcome  To home page";
	}	
	
	@GetMapping("/about")
	public String about() {
		return "Welcome  To about page";
	}	
}

