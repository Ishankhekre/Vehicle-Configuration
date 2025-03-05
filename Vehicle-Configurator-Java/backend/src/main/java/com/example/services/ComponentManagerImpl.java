package com.example.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Component;
import com.example.repository.ComponentRepository;

@Service
public class ComponentManagerImpl implements ComponentManager {
	
	@Autowired
	ComponentRepository componentrepository;

	@Override
	public Optional<Component>getByComp_id(int comp_id) {
		// TODO Auto-generated method stub
		return componentrepository.findById(comp_id);
	}

}
