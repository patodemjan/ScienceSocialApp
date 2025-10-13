package com.example.AppBackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.AppBackend.entity.User;
import com.example.AppBackend.repository.UserRepository;

public class UserController {
	
	private final UserRepository userRepository;

    // Constructor Injection
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // POST - register
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        System.out.println("Saving new user: " + user.getUsername());
        return userRepository.save(user);
    }

    // GET - login (overenie)
    @GetMapping("/login")
    public User login(@RequestParam String username, @RequestParam String password) {
        User existing = userRepository.findByUsername(username);
        if (existing != null && existing.getPassword().equals(password)) {
            return existing;
        }
        return null;
    }
}
