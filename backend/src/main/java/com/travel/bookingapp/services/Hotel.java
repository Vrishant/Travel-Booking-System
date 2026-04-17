package com.travel.bookingapp.services;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "hotels")
public class Hotel extends TravelService {

    private String location;
    private Date checkInDate;
    private Date checkOutDate;

    public Hotel() {}

    @Override
    public String getDetails() {
        return "Hotel at " + location;
    }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public Date getCheckInDate() { return checkInDate; }
    public void setCheckInDate(Date checkInDate) { this.checkInDate = checkInDate; }
    public Date getCheckOutDate() { return checkOutDate; }
    public void setCheckOutDate(Date checkOutDate) { this.checkOutDate = checkOutDate; }
}