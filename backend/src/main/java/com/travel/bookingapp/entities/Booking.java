package com.travel.bookingapp.entities;

import com.travel.bookingapp.enums.EBookingStatus;
import com.travel.bookingapp.services.TravelService;
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

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "travel_service_id")
    private TravelService travelService;

    // ✅ Default constructor (required by JPA)
    public Booking() {}

    // ✅ Parameterized constructor
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
        if (travelService != null) {
            travelService.updateAvailability(1);
        }
    }

    public double calculateAmount() {
        if (travelService != null) {
            return travelService.getPrice(); // assuming method exists
        }
        return 0.0;
    }

    // Getters & Setters
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

    public TravelService getTravelService() { return travelService; }

    public void setTravelService(TravelService travelService) { this.travelService = travelService; }
}