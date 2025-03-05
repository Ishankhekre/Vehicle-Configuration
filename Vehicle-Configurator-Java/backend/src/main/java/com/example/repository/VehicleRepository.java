package com.example.repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
	
	@Query(value= "select * from component c join vehicle v on c.comp_id = v.comp_id where (model_id =:model_id)" , nativeQuery = true)
	Optional<List<Map<String, Object>>> getByModel_id(@Param("model_id") int model_id);

}
