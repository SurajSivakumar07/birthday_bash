package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.AllTogetherModel;
import com.example.backend.repository.AllTogetherRepo;
import java.util.List;

@Service
public class AllTogetherService {


    @Autowired
    AllTogetherRepo repo;

    public List<AllTogetherModel> getDetails(){
        return repo.findAll();

    }

    public boolean postDetails(AllTogetherModel entity){
        repo.save(entity);
        return true;
    }

    public boolean delete(int id){
    

        repo.deleteById(id);

        return true;
    }
}
