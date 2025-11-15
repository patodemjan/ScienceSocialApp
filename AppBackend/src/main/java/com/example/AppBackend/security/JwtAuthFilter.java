package com.example.AppBackend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String path = request.getRequestURI();

        // preskočí OPTIONS requesty a verejné endpointy
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())
                || path.startsWith("/api/users")
                || path.startsWith("/api/rooms")
                || path.startsWith("/api/posts")) {
            filterChain.doFilter(request, response);
            return;
        }

        // TODO: tu sa pridá skutočná JWT autentifikácia, keď budeš mať JwtUtil metódy
        // zatiaľ všetko prejde -> žiadne 403 pre testovanie frontend + mock dáta

        filterChain.doFilter(request, response);
    }
}
