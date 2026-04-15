package com.travel.bookingapp.services;

import java.util.Date;

public class Flight extends TravelService {
    private String source;
    private String destination;
    private Date departureTime;
    private Date arrivalTime;

    @Override
    public String getDetails() {
        return "Flight from " + source + " to " + destination;
    }
}
