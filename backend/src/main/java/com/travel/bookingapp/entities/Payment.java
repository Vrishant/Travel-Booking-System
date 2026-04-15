package com.travel.bookingapp.entities;

import com.travel.bookingapp.enums.EPaymentStatus;
import com.travel.bookingapp.interfaces.PaymentMethod;

public class Payment {
    private String paymentId;
    private double amount;
    private EPaymentStatus status;

    public boolean processPayment(PaymentMethod method) {
        boolean isSuccess = method.pay(amount);
        this.status = isSuccess ? EPaymentStatus.SUCCESSFUL : EPaymentStatus.FAILED;
        return isSuccess;
    }

    public boolean refund() {
        this.status = EPaymentStatus.REFUNDED;
        return true;
    }
}
