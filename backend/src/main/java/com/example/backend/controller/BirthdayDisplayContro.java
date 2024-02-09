package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.BirthdayDto;
import com.example.backend.service.BirthdayService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.backend.modal.BirthdayModal;

@RestController
public class BirthdayDisplayContro {

    BirthdayService service;

    @GetMapping("/path")
    public List<BirthdayModal> get()
    {
        return service.getData();
    }
    
    @PostMapping("/dirthbay")
    public String add(@RequestBody BirthdayDto birthday) {
        
        return service.addData(birthday);
    }
    
    
}
