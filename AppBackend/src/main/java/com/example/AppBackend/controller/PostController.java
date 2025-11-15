package com.example.AppBackend.controller;

import com.example.AppBackend.entity.Post;
import com.example.AppBackend.repository.PostRepository;
import com.example.AppBackend.repository.RoomRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostRepository postRepository;
    private final RoomRepository roomRepository;

    public PostController(PostRepository postRepository, RoomRepository roomRepository) {
        this.postRepository = postRepository;
        this.roomRepository = roomRepository;
    }

    @GetMapping("/room/{roomId}")
    public List<Post> getPostsByRoom(@PathVariable Long roomId) {
        return postRepository.findByRoomId(roomId);
    }

    @PostMapping("/room/{roomId}")
    @PreAuthorize("isAuthenticated()")
    public Post addPost(@PathVariable Long roomId, @RequestBody Post post, @AuthenticationPrincipal org.springframework.security.core.userdetails.User user) {
        var room = roomRepository.findById(roomId).orElseThrow();
        post.setRoom(room);
        post.setCreatedAt(LocalDateTime.now());
        post.setAuthorUsername(user.getUsername());
        return postRepository.save(post);
    }

    @DeleteMapping("/{postId}")
    @PreAuthorize("isAuthenticated()")
    public void deletePost(@PathVariable Long postId, @AuthenticationPrincipal org.springframework.security.core.userdetails.User user) {
        Post post = postRepository.findById(postId).orElseThrow();
        if (user.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN")) 
            || post.getAuthorUsername().equals(user.getUsername())) {
            postRepository.delete(post);
        } else {
            throw new RuntimeException("No permission to delete this post");
        }
    }
}
