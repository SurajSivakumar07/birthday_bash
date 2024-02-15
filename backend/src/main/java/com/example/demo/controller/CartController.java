package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CartDto;
import com.example.demo.model.CartModel;
import com.example.demo.service.CartService;

@RestController

@CrossOrigin("*")
public class CartController {
	@Autowired
	CartService service;
	
	
	
	@GetMapping("/cart")
	public List<CartModel> dataGet(){
		return service.getData();
	}
	
	@PostMapping("/cart")
	public String dataGet(@RequestBody CartDto model) {
		return service.addData(model);
	}

	@DeleteMapping("/cart/{id}")
	public String delteById(@PathVariable int id ) {
		return service.deleteById(id);
	}
}
