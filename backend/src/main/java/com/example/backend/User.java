package com.example.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class User {
    @GetMapping("/")


    public String getById(){
        return "hii";
    }
}
