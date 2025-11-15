package com.example.AppBackend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private String type;

    private LocalDateTime createdAt;

    private String authorUsername;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
