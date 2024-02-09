package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.modal.BirthdayModal;

@Repository
public interface BirthdayRepo extends JpaRepository<BirthdayModal,Integer>{
    
}
