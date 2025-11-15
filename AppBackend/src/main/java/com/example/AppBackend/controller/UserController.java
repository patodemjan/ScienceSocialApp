package com.example.AppBackend.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.AppBackend.entity.User;
import com.example.AppBackend.repository.UserRepository;
import com.example.AppBackend.security.JwtUtil;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = { "http://localhost:4200", "https://sciencesocialapp-1.onrender.com" })
public class UserController {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserController(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    // POST - register new user
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println("Saving new user: " + user.getUsername());
        return userRepository.save(user);
    }

    // POST - login
    @PostMapping("/login")
    public LoginResponse loginUser(@RequestBody User user) {
        User existing = userRepository.findByUsername(user.getUsername());
        if (existing != null && passwordEncoder.matches(user.getPassword(), existing.getPassword())) {
            String token = jwtUtil.generateToken(existing.getUsername());
            return new LoginResponse(existing.getUsername(), token);
        }
        return null; // login failed
    }

    // DTO pre login response
    public static class LoginResponse {
        public String username;
        public String token;

        public LoginResponse(String username, String token) {
            this.username = username;
            this.token = token;
        }
    }
}
