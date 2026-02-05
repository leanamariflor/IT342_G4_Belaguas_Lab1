package miniapp.com.example.authsystem.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private String email;
    private String password;
    private String role;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isActive;
    private LocalDateTime lastActive;

    // getters & setters
}
