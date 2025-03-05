package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Manufacturer;
import com.example.repository.ManufacturerRepository;

@Service
public class ManufacturerManagerImpl implements ManufacturerManager {
	
	@Autowired
	ManufacturerRepository manufacturererepository;

	@Override
	public Optional<List<Manufacturer>> findBySegId(int segId) {
		// TODO Auto-generated method stub
		return manufacturererepository.findAllBySegment_seg_id(segId);
	}

}
