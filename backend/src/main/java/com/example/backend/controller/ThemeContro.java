package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.ThemeModal;
import com.example.backend.service.ThemeService;

@RestController
public class ThemeContro {
    
    @Autowired
    ThemeService service;

    @GetMapping("/gettheme")
    public List<ThemeModal> get()
    {
        return service.getData();
    }

    @PostMapping("/posttheme")
    public String add(@RequestBody ThemeModal addion){

        return service.addData(addion);
    }

}
