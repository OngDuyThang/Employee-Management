package com.example.demo.controllers;

import com.example.demo.models.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {
    @GetMapping("/get")
    public List<Employee> getAll() {
        return List.of(new Employee("", "", ""));
    }

    @PostMapping("/create")
    public void create(String firstName, String lastName, String email) {
        new Employee(firstName, lastName, email);
    }

    @PutMapping("/update/:id")
    public void update() {

    }

    @DeleteMapping("/delete/:id")
    public void delete() {

    }
}
