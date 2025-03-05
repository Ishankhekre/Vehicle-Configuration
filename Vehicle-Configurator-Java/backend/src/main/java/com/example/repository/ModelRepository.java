package com.example.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Model;

@Repository
public interface ModelRepository extends JpaRepository<Model,Integer> {
	
	@Query(value="select m.model_id ,m.image_path,m.mdl_name,m. min_qty,m.price,m.mfg_id,m.seg_id from model m where m.seg_id = :seg_id AND m.mfg_id = :mfg_id",nativeQuery = true)
    List<Model> findAllByMfgIdAndSegId(@Param("seg_id") int seg_id,@Param("mfg_id") int mfg_id);
}



