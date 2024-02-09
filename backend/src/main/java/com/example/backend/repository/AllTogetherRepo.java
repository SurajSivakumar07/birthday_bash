package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.modal.AllTogetherModel;


@Repository
public interface AllTogetherRepo extends JpaRepository<AllTogetherModel,Integer>{
    
}
