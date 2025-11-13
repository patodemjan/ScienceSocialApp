package com.example.AppBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.AppBackend.entity.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {

}
