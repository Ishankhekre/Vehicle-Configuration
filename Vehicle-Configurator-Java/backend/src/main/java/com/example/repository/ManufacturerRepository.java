package com.example.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entities.Manufacturer;
import com.example.entities.Segment;
import com.example.entities.User;

@Repository
public interface ManufacturerRepository extends JpaRepository<Manufacturer, Integer> {
	
	@Query(value= """
			select m.mfg_id , m.mfg_name, m.seg_id from manufacturer m where m.seg_id = ?1 
			""" , nativeQuery = true)
	Optional<List<Manufacturer>> findAllBySegment_seg_id(int segId);
}
