package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.modal.Addon;

public interface AddonRepo extends JpaRepository<Addon,Integer>{
    
}
