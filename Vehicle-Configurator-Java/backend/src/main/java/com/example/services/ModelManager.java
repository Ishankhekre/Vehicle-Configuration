package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.entities.Model;

public interface ModelManager {
	
	List<Model> findBySeg_IdAndMfg_Id(int seg_id,int mfg_id);

}
