package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.entities.Manufacturer;

public interface ManufacturerManager {
	
	Optional<List<Manufacturer>> findBySegId (int segId);
}
