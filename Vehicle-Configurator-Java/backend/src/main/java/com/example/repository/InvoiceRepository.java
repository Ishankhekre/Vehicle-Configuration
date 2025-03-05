package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.dto.InvoiceDTO;

@Repository
public interface InvoiceRepository extends JpaRepository<InvoiceDTO, Long> {

	@Query(value = "SELECT * FROM invoicedto WHERE user_name = :username", nativeQuery = true)
	List<InvoiceDTO> findByUserName(@Param("username") String userName);


}
