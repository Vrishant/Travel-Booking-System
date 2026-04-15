package com.travel.bookingapp.entities;

import com.travel.bookingapp.services.TravelService;

public class Admin {
    private String adminId;
    private String name;

    public void addService(TravelService service) {
        // Logic to persist service
    }

    public void updateService(TravelService service) {
        // Logic to update existing service
    }

    public void removeService(String serviceId) {
        // Logic to remove service from database
    }
}
