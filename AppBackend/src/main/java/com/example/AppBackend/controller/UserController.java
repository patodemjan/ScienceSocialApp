package com.example.AppBackend.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.AppBackend.entity.User;
import com.example.AppBackend.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = { "http://localhost:4200", "https://sciencesocialapp-1.onrender.com" })
public class UserController {
    
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // POST - register new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        // hash password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println("Saving new user: " + user.getUsername());
        return userRepository.save(user);
    }

    // POST - login
    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        User existing = userRepository.findByUsername(user.getUsername());
        if (existing != null && passwordEncoder.matches(user.getPassword(), existing.getPassword())) {
            return existing; // login successful
        }
        return null; // login failed
    }
}
