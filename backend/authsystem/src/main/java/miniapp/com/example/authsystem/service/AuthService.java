package miniapp.com.example.authsystem.service;

import miniapp.com.example.authsystem.dto.LoginDto;
import miniapp.com.example.authsystem.dto.UserDto;
import miniapp.com.example.authsystem.entity.User;
import miniapp.com.example.authsystem.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(UserDto dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(encoder.encode(dto.getPassword()));
        user.setRole("USER");
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        user.setActive(true);

        return userRepository.save(user);
    }

    public User authenticate(LoginDto dto) {
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!encoder.matches(dto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        user.setLastActive(LocalDateTime.now());
        return userRepository.save(user);
    }

    public User getCurrentUser() {
        return userRepository
                .findAll()
                .stream()
                .max((u1, u2) -> {
                    if (u1.getLastActive() == null) return -1;
                    if (u2.getLastActive() == null) return 1;
                    return u1.getLastActive().compareTo(u2.getLastActive());
                })
                .orElseThrow(() -> new RuntimeException("No active user"));
    }

}
