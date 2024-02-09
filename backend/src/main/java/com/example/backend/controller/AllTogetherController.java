package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.AllTogetherModel;
import com.example.backend.service.AllTogetherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class AllTogetherController {

    @Autowired
    AllTogetherService service;

    @GetMapping("/get")
    public List<AllTogetherModel> getData() {
        return service.getDetails();
    }
    

    @PostMapping("/post")
    public boolean postDetails(@RequestBody AllTogetherModel entity) {
        return service.postDetails(entity);
    }
    @DeleteMapping("/delete/{id}")
    public boolean deleteData(@PathVariable int id){
        return  service.delete(id);
    }    
    
}
