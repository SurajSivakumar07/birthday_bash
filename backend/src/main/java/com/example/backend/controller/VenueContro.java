package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.VenueModal;
import com.example.backend.service.VenueService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("")
public class VenueContro {

    @Autowired
    VenueService service;

    @GetMapping("/getvenue")
    public List<VenueModal> get()
    {
        return service.getData();
    }
    
    @PostMapping("/postvenue")
    public String add(@RequestBody VenueModal venue) {
        
        
        return service.addData(venue);
    }

    @DeleteMapping("/delvenue/{id}")
    public boolean deleteById(@PathVariable int id){
        return service.deleteById(id);
    }
}
