package com.example.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Vehicle;
import com.example.repository.VehicleRepository;

@Service
public class VehicleManagerImpl implements VehicleManager  {
	
	@Autowired
	VehicleRepository vehiclerepository;

	@Override
	public Optional<List<Map<String, Object>>> getByModel_id(int model_id) {
		// TODO Auto-generated method stub
		return vehiclerepository.getByModel_id( model_id);
	}

}
