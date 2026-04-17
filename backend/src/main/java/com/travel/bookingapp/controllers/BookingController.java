package com.travel.bookingapp.controllers;

import com.travel.bookingapp.entities.Booking;
import com.travel.bookingapp.entities.Payment;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @PostMapping
    public Booking createBooking(@RequestBody Booking bookingRequest) {
        // TODO: Save booking to DB later
        return bookingRequest;
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        // TODO: Fetch from DB
        return new ArrayList<>();
    }

    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable Long id) {
        // TODO: Fetch from DB
        return new Booking(); // ✅ works now (default constructor added)
    }

    @PutMapping("/{id}/cancel")
    public Booking cancelBooking(@PathVariable Long id) {
        // TODO: Fetch booking from DB instead
        Booking booking = new Booking();
        booking.cancelBooking();
        return booking;
    }

    @PostMapping("/{id}/payment")
    public boolean processPayment(@PathVariable Long id, @RequestBody Payment paymentRequest) {
        // TODO: Implement payment logic
        return true;
    }
}