package com.example.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.entities.User;
import com.example.repository.UserRepository;

@Service
public class UserManagerImpl implements UserManager {

	@Autowired
	private UserRepository userrepository;
	
	@Autowired 
	private BCryptPasswordEncoder encoder;

	public User addUser(User user) {
		user.setPassword(encoder.encode(user.getPassword()));
		return userrepository.save(user);
	}

	public boolean validateUser(User user) {
		
		User existingUser = userrepository.findByUsername(user.getUsername());
		if(existingUser != null)
		{
			String storepass = existingUser.getPassword();
			return encoder.matches(user.getPassword(), storepass);
		}
		
		return false;
	}

	@Override
	public User getUserByUsername(String username) {

		return userrepository.findByUsername(username);
	}

}
