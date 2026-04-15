package com.travel.bookingapp.services;

import java.util.Date;

public abstract class TravelService {
    protected String serviceId;
    protected String name;
    protected double price;
    protected int availability;

    public boolean checkAvailability() {
        return availability > 0;
    }

    public void updateAvailability(int count) {
        this.availability += count;
    }

    public double getPrice() {
        return price;
    }

    public abstract String getDetails();
}
