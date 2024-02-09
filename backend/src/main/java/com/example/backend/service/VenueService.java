package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.VenueModal;
import com.example.backend.repository.VenueRepo;

@Service
public class VenueService {

    @Autowired
    VenueRepo repo;
    
    public String addData(VenueModal venue)
    {
        repo.save(venue);
        return "Added";
    }
    
    public List<VenueModal> getData(){
        return repo.findAll();
    }

   public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }
}
