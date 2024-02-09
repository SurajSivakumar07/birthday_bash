package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.Addon;
import com.example.backend.repository.AddonRepo;

@Service
public class AddonService {

    @Autowired
    AddonRepo repo;
    public String addData(Addon modal)
    {
        repo.save(modal);
        return "Added";
    }

    public List<Addon> getData(){
        return repo.findAll();
    } 

    
}
