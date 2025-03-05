package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dto.UserDTO;

public interface UserDtoRepository extends JpaRepository<UserDTO, Long> {
    UserDTO findByUserName(String userName);
}
