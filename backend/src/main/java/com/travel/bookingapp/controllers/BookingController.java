package com.travel.bookingapp.controllers;

import com.travel.bookingapp.entities.Booking;
import com.travel.bookingapp.entities.User;
import com.travel.bookingapp.entities.Payment;
import com.travel.bookingapp.interfaces.PaymentMethod;
import com.travel.bookingapp.services.TravelService;

public class BookingController {
    
    public Booking createBooking(User user, TravelService service) {
        return user.bookService(service);
    }

    public boolean processPayment(Booking booking, PaymentMethod method) {
        Payment payment = new Payment();
        // Set payment details based on booking...
        boolean success = payment.processPayment(method);
        
        if (success) {
            booking.confirmBooking();
            // Trigger Notification here
        }
        return success;
    }

    public void cancelBooking(Booking booking) {
        booking.cancelBooking();
        // Trigger refund processing and notification here
    }
}
