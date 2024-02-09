package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.AdditonalModal;
import com.example.backend.repository.AddionalRepo;

@Service
public class AddionalService {
    
    @Autowired
    AddionalRepo repo;
    public String addData(AdditonalModal modal)
    {
        repo.save(modal);
        return "Added";
    }

    public List<AdditonalModal> getData(){
        return repo.findAll();
    }
}
