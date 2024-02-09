package com.example.event.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.event.Models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

}
