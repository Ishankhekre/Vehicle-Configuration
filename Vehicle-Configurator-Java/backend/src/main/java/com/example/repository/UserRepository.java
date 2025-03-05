package com.example.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.User;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByUsername(String username);
	
	 @Query("SELECT count(u)>0 FROM User u WHERE u.username = :username AND u.password = :password")
	 boolean validateUser(@Param("username") String username, @Param("password") String password);
	
//	@Query(value="SELECT * FROM User Where username=:username",nativeQuery=true)
//	 User getUserByUsername(@Param("username")String username);
	
}