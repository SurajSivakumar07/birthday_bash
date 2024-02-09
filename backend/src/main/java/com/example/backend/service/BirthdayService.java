package com.example.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.dto.BirthdayDto;
import com.example.backend.modal.BirthdayModal;
import com.example.backend.repository.BirthdayRepo;

@Service
public class BirthdayService {

    BirthdayRepo repo;
    public String addData(BirthdayDto birthday)
    {
        BirthdayModal model=new BirthdayModal();
        repo.save(model);
        return "Added";
    }

    public List<BirthdayModal> getData(){
        return repo.findAll();
    } 
}
