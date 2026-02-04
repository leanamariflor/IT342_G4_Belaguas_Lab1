package miniapp.com.example.authsystem.controller;

import miniapp.com.example.authsystem.entity.UserEntity;
import miniapp.com.example.authsystem.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserEntity register(@RequestBody UserEntity user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public UserEntity login(@RequestBody UserEntity user) {
        return userService.login(user.getEmail(), user.getPassword());
    }
}
