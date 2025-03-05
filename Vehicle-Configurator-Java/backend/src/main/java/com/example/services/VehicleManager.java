package com.example.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.entities.Vehicle;

public interface VehicleManager {
	
	Optional<List<Map<String, Object>>> getByModel_id(int model_id);

}
