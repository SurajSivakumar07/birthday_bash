package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.Booking;
import com.example.backend.repository.BookingRepo;

@Service
public class BookingService {

    @Autowired
    BookingRepo repo;
    public String addData(Booking modal)
    {
        repo.save(modal);
        return "Added";
    }

    public List<Booking> getData(){
        return repo.findAll();
    }
    
}
