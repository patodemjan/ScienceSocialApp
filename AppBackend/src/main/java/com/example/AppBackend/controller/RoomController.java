package com.example.AppBackend.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.AppBackend.entity.Room;
import com.example.AppBackend.repository.RoomRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "*")
public class RoomController {

    private final RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public void deleteRoom(@PathVariable Long id) {
        roomRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public Room getRoomById(@PathVariable Long id) {
        return roomRepository.findById(id).orElseThrow();
    }
}
