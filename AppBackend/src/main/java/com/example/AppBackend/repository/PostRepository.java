package com.example.AppBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.AppBackend.entity.Post;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByRoomId(Long roomId);
}
