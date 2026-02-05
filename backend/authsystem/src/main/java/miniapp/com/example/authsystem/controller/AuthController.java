package miniapp.com.example.authsystem.controller;

import miniapp.com.example.authsystem.dto.LoginDto;
import miniapp.com.example.authsystem.dto.UserDto;
import miniapp.com.example.authsystem.entity.User;
import miniapp.com.example.authsystem.repository.UserRepository;
import miniapp.com.example.authsystem.service.AuthService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
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
    public User login(@RequestBody LoginDto dto) {
        return authService.authenticate(dto);
    }



    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String username = authentication.name();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user);
    }

}
