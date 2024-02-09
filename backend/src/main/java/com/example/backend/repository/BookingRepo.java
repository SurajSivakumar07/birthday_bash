package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.modal.Booking;

public interface BookingRepo extends JpaRepository<Booking,Integer>{
    
}
