package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.Component;

public interface ComponentRepository extends JpaRepository<Component, Integer> {
	

}
