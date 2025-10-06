package com.example.AppBackend.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api")
public class RestController {
    
    @GetMapping("/hello")
    public Map<String, String> sayHello() {
        return Collections.singletonMap("message", "Hello from Spring Boot!");
    }
}
