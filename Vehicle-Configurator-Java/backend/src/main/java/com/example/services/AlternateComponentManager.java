
package com.example.services;

import java.util.List;
import java.util.Map;

import com.example.entities.AlternateComponent;

public interface AlternateComponentManager {
	
	List<AlternateComponent> findAlternateComponentbyModel_IdAndComp_Id(int comp_id , int model_id);
	
	List<Map<String, Object>> findByModel_idAndAlt_Comp_Id( int model_id ,int alt_id);

}
