package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.AdditonalModal;
import com.example.backend.service.AddionalService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class AddionalContro {

    @Autowired
    AddionalService service;

    @GetMapping("/getaddion")
    public List<AdditonalModal> get()
    {
        return service.getData();
    }

    @PostMapping("/postaddion")
    public String add(@RequestBody AdditonalModal addion){

        return service.addData(addion);
    }
    
    



    
}
