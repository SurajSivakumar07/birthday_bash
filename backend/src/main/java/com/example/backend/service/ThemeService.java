package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.ThemeModal;
import com.example.backend.repository.ThemeRepo;

@Service
public class ThemeService {

    @Autowired
    ThemeRepo repo;

    public String addData(ThemeModal modal)
    {
        repo.save(modal);
        return "Added";
    }

    public List<ThemeModal> getData(){
        return repo.findAll();
    }

    
}
