package com.travel.bookingapp.entities;

import com.travel.bookingapp.entities.Booking;
import com.travel.bookingapp.services.TravelService;
import java.util.List;
import java.util.ArrayList;

public class User {
    private String userId;
    private String name;
    private String email;
    private String phoneNumber;
    private List<Booking> bookings = new ArrayList<>();

    public List<TravelService> searchService() {
        // Logic to query database for available services
        return new ArrayList<>();
    }

    public Booking bookService(TravelService service) {
        Booking newBooking = new Booking(this, service);
        bookings.add(newBooking);
        return newBooking;
    }

    public List<Booking> viewBookings() {
        return this.bookings;
    }
}
