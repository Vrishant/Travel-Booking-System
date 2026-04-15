package com.travel.bookingapp.services;

import java.util.Date;

public class Hotel extends TravelService {
    private String location;
    private Date checkInDate;
    private Date checkOutDate;

    @Override
    public String getDetails() {
        return "Hotel at " + location;
    }
}
