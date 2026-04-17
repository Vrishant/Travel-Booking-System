package com.travel.bookingapp.services;

import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "travel_services")
public abstract class TravelService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private int availability;

    public TravelService() {}

    public abstract String getDetails();

    public void updateAvailability(int change) {
        this.availability += change;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public int getAvailability() { return availability; }
    public void setAvailability(int availability) { this.availability = availability; }
}