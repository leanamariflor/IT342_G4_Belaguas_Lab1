package miniapp.com.example.authsystem.controller;

import miniapp.com.example.authsystem.Security.JwtUtil;
import miniapp.com.example.authsystem.dto.LoginDto;
import miniapp.com.example.authsystem.dto.LoginResponse;
import miniapp.com.example.authsystem.dto.UserDto;
import miniapp.com.example.authsystem.entity.User;
import miniapp.com.example.authsystem.repository.UserRepository;
import miniapp.com.example.authsystem.service.AuthService;
import org.springframework.security.core.Authentication;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(
        origins = {
                "http://localhost:5173",
                "http://192.168.1.12:5173",
                "http://192.168.1.12:8080",
                "http://192.168.11.181/"
        }
)
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;

    public AuthController(AuthService authService, UserRepository userRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User register(@RequestBody UserDto dto) {
        return authService.register(dto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto dto) {
        try {
            User user = authService.authenticate(dto);
            String token = JwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(new LoginResponse(token, user));
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }





    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user);
    }


}
