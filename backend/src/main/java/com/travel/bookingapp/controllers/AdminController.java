package com.travel.bookingapp.controllers;

import com.travel.bookingapp.services.TravelService;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    
    @GetMapping("/services")
    public List<TravelService> getAllServices() {
        // TODO: Return all services from database
        return new ArrayList<>();
    }

    @PostMapping("/services")
    public TravelService addService(@RequestBody TravelService service) {
        // TODO: Save new service to database
        return service;
    }

    @PutMapping("/services/{id}")
    public TravelService updateService(@PathVariable Long id, @RequestBody TravelService service) {
        // TODO: Update existing service
        return service;
    }

    @DeleteMapping("/services/{id}")
    public void deleteService(@PathVariable Long id) {
        // TODO: Delete service from database
    }

    @GetMapping("/bookings/cancellations")
    public List<Object> getPendingCancellations() {
        // TODO: Return bookings pending cancellation approval
        return new ArrayList<>();
    }

    @PutMapping("/bookings/{id}/refund")
    public boolean processRefund(@PathVariable Long id) {
        // TODO: Process refund for cancelled booking
        return true;
    }
}