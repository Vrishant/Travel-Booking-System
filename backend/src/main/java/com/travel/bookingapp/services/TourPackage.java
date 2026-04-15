package com.travel.bookingapp.services;

public class TourPackage extends TravelService {
    private String itinerary;
    private int duration; // in days
    private boolean guideIncluded;

    @Override
    public String getDetails() {
        return "Tour Package: " + itinerary + " (" + duration + " days)";
    }
}
