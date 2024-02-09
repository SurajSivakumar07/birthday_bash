package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.modal.UserModal;

public interface UserRepo extends JpaRepository<UserModal,Long>{
        Optional<UserModal> findByEmail(String email);
}
