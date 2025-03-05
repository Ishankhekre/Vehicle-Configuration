
package com.example.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.AlternateComponent;
import com.example.repository.AlternateComponentRepository;

@Service
public class AlternateComponentManagerImpl implements AlternateComponentManager {

	@Autowired 
	AlternateComponentRepository alternatecomponentrepository;
	
	@Override
	public List<AlternateComponent> findAlternateComponentbyModel_IdAndComp_Id(int comp_id, int model_id) {
		// TODO Auto-generated method stub
		return alternatecomponentrepository.findAlternateComponentbyModel_idAndComp_id(comp_id,model_id);
	}

	@Override
	public List<Map<String, Object>> findByModel_idAndAlt_Comp_Id(int model_id, int alt_id) {
		// TODO Auto-generated method stub
		return alternatecomponentrepository.findbyModel_idAndAlt_comp_id(model_id,alt_id);
	}

}

