package com.travel.bookingapp.controllers;

import com.travel.bookingapp.services.TravelService;
import com.travel.bookingapp.services.Flight;
import com.travel.bookingapp.services.Hotel;
import com.travel.bookingapp.services.TourPackage;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @GetMapping
    public List<TravelService> getServices(
            @RequestParam(required = false) String source,
            @RequestParam(required = false) String destination,
            @RequestParam(required = false) String date,
            @RequestParam(required = false) Double budget) {

        List<TravelService> services = new ArrayList<>();

        Flight flight = new Flight();
        flight.setName("Flight 101");
        flight.setPrice(5000);
        flight.setAvailability(10);
        services.add(flight);

        Hotel hotel = new Hotel();
        hotel.setName("Hotel Grand");
        hotel.setPrice(3000);
        hotel.setAvailability(5);
        services.add(hotel);

        TourPackage tour = new TourPackage();
        tour.setName("Goa Tour");
        tour.setPrice(8000);
        tour.setAvailability(20);
        services.add(tour);

        return services;
    }

    @GetMapping("/{id}")
    public TravelService getService(@PathVariable Long id) {
        // Return a concrete subclass instead of abstract TravelService
        Flight flight = new Flight();
        flight.setId(id);
        flight.setName("Flight " + id);
        flight.setPrice(5000);
        flight.setAvailability(10);
        return flight;
    }
}