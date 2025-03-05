package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Model;
import com.example.repository.ModelRepository;

@Service
public class ModelManagerImpl implements ModelManager{
	
	@Autowired
	ModelRepository modelRepository;

	@Override
	public List<Model> findBySeg_IdAndMfg_Id(int segId, int MfgId) {
		// TODO Auto-generated method stub
		 return modelRepository.findAllByMfgIdAndSegId(segId,MfgId);
	}
	
	
	

}
