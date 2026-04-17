package com.travel.bookingapp.services;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "flights")
public class Flight extends TravelService {

    private String source;
    private String destination;
    private Date departureTime;
    private Date arrivalTime;

    public Flight() {}

    @Override
    public String getDetails() {
        return "Flight from " + source + " to " + destination;
    }

    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }
    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }
    public Date getDepartureTime() { return departureTime; }
    public void setDepartureTime(Date departureTime) { this.departureTime = departureTime; }
    public Date getArrivalTime() { return arrivalTime; }
    public void setArrivalTime(Date arrivalTime) { this.arrivalTime = arrivalTime; }
}