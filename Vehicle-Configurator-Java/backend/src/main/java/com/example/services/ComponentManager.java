package com.example.services;

import java.util.Optional;

import com.example.entities.Component;

public interface ComponentManager {
	
	Optional<Component> getByComp_id(int comp_id);

}
