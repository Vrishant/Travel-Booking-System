package com.travel.bookingapp.impl;

import com.travel.bookingapp.interfaces.PaymentMethod;

public class CreditCardPayment implements PaymentMethod {
    @Override
    public boolean pay(double amount) {
        // Logic for Credit Card processing
        return true;
    }
}
