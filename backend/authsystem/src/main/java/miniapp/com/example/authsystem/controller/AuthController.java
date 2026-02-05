package miniapp.com.example.authsystem.controller;

import miniapp.com.example.authsystem.dto.LoginDto;
import miniapp.com.example.authsystem.dto.UserDto;
import miniapp.com.example.authsystem.entity.User;
import miniapp.com.example.authsystem.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public User register(@RequestBody UserDto dto) {
        return authService.register(dto);
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginDto dto) {
        return authService.authenticate(dto);
    }
}
