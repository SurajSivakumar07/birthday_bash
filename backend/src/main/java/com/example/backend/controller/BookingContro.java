package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.Booking;
import com.example.backend.service.BookingService;

@RestController
public class BookingContro {
    
    @Autowired
    BookingService service;

    @GetMapping("/getbooking")
    public List<Booking> get()
    {
        return service.getData();
    }

    @PostMapping("/postbooking")
    public String add(@RequestBody Booking addion){

        return service.addData(addion);
    }

}
