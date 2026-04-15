package com.travel.bookingapp.impl;

import com.travel.bookingapp.interfaces.PaymentMethod;

public class UpiPayment implements PaymentMethod {
    @Override
    public boolean pay(double amount) {
        // Logic for UPI processing
        return true;
    }
}
