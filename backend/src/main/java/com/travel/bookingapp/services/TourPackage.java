package com.travel.bookingapp.services;

import jakarta.persistence.*;

@Entity
@Table(name = "tour_packages")
public class TourPackage extends TravelService {

    private String itinerary;
    private int duration;
    private boolean guideIncluded;

    public TourPackage() {}

    @Override
    public String getDetails() {
        return "Tour Package: " + itinerary + " (" + duration + " days)";
    }

    public String getItinerary() { return itinerary; }
    public void setItinerary(String itinerary) { this.itinerary = itinerary; }
    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }
    public boolean isGuideIncluded() { return guideIncluded; }
    public void setGuideIncluded(boolean guideIncluded) { this.guideIncluded = guideIncluded; }
}