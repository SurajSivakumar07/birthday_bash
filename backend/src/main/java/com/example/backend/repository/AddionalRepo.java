package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.modal.AdditonalModal;

public interface AddionalRepo extends JpaRepository<AdditonalModal,Integer> {
    
}
