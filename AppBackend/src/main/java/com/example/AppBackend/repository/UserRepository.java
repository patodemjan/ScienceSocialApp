package com.example.AppBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.AppBackend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
