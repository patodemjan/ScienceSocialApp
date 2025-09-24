package com.example.AppBackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())                 // vypne CSRF
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()) // všetko povolené
            .formLogin(form -> form.disable())            // vypne login form
            .httpBasic(basic -> basic.disable());         // vypne BasicAuth

        return http.build();
    }
}
