package com.example.AppBackend.controller;

import com.example.AppBackend.entity.Topic;
import com.example.AppBackend.repository.RoomRepository;
import com.example.AppBackend.repository.TopicRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin(origins = "*")
public class TopicController {

    private final TopicRepository topicRepository;
    private final RoomRepository roomRepository;

    public TopicController(TopicRepository topicRepository, RoomRepository roomRepository) {
        this.topicRepository = topicRepository;
        this.roomRepository = roomRepository;
    }

    @GetMapping("/room/{roomId}")
    public List<Topic> getTopicsByRoom(@PathVariable Long roomId) {
        return topicRepository.findByRoomId(roomId);
    }

    @PostMapping("/room/{roomId}")
    @PreAuthorize("isAuthenticated()")
    public Topic addTopic(@PathVariable Long roomId, @RequestBody Topic topic) {
        var room = roomRepository.findById(roomId).orElseThrow();
        topic.setRoom(room);
        return topicRepository.save(topic);
    }

    @DeleteMapping("/{topicId}")
    @PreAuthorize("isAuthenticated()")
    public void deleteTopic(@PathVariable Long topicId) {
        Topic topic = topicRepository.findById(topicId).orElseThrow();
        topicRepository.delete(topic);
    }
}
