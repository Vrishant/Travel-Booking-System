package com.travel.bookingapp.entities;

import com.travel.bookingapp.enums.EBookingStatus;
import com.travel.bookingapp.services.TravelService;
import java.util.Date;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String bookingId;
    private Date bookingDate;
    private EBookingStatus status;
    private double totalAmount;

    private String userId; // Reference to user

    private String travelServiceId; // Reference to service

    public Booking(User user, TravelService service) {
        this.user = user;
        this.travelService = service;
        this.bookingDate = new Date();
        this.status = EBookingStatus.PENDING;
        this.totalAmount = calculateAmount();
    }

    public void confirmBooking() {
        this.status = EBookingStatus.CONFIRMED;
    }

    public void cancelBooking() {
        this.status = EBookingStatus.CANCELLED;
        // Logic to update travel service availability
        travelService.updateAvailability(1); 
    }

    public double calculateAmount() {
        return 0.0; // Use travelServiceId to lookup price
    }

    // Getters/Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getBookingId() { return bookingId; }
    public void setBookingId(String bookingId) { this.bookingId = bookingId; }
    public Date getBookingDate() { return bookingDate; }
    public void setBookingDate(Date bookingDate) { this.bookingDate = bookingDate; }
    public EBookingStatus getStatus() { return status; }
    public void setStatus(EBookingStatus status) { this.status = status; }
    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public String getTravelServiceId() { return travelServiceId; }
    public void setTravelServiceId(String travelServiceId) { this.travelServiceId = travelServiceId; }
}
