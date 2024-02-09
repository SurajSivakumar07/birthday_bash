package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.Addon;
import com.example.backend.service.AddonService;

@RestController
public class AddonContro {
    
    @Autowired
    AddonService service;

    @GetMapping("/getaddon")
    public List<Addon> get()
    {
        return service.getData();
    }

    @PostMapping("/postaddon")
    public String add(@RequestBody Addon addion){

        return service.addData(addion);
    }
}
