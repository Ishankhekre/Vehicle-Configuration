
package com.example.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.AlternateComponent;

@Repository
public interface AlternateComponentRepository extends JpaRepository<AlternateComponent, Integer> {
	
	@Query(nativeQuery = true , value="select * from alternate_component where (comp_id=:comp_id and model_id=:model_id)")
	List<AlternateComponent> findAlternateComponentbyModel_idAndComp_id(@Param("comp_id") int comp_id ,@Param("model_id") int model_id);
	
	@Query(nativeQuery = true , value = "Select * from alternate_component ac,Component c where (model_id=:model_id and  alt_comp_id=:alt_id) and ac.comp_id=c.comp_id")
	List<Map<String, Object>> findbyModel_idAndAlt_comp_id (@Param("model_id") int model_id , @Param("alt_id") int alt_id);

}



