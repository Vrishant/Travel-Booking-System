package com.travel.bookingapp.dto;

public class ServiceDto {
    private Long id;
    private String serviceId;
    private String name;
    private double price;
    private int availability;
    private String type; // Flight, Hotel, TourPackage
    private String details;

    // Constructors
    public ServiceDto() {}

    public ServiceDto(String serviceId, String name, double price, int availability, String type, String details) {
        this.serviceId = serviceId;
        this.name = name;
        this.price = price;
        this.availability = availability;
        this.type = type;
        this.details = details;
    }

    // Getters/Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getServiceId() { return serviceId; }
    public void setServiceId(String serviceId) { this.serviceId = serviceId; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public int getAvailability() { return availability; }
    public void setAvailability(int availability) { this.availability = availability; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }
}
