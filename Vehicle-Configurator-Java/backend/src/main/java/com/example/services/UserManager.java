package com.example.services;



import com.example.entities.User;

public interface UserManager 
{
	 User addUser(User user);
	 boolean validateUser(User user);
	 User getUserByUsername(String username);
	
}

