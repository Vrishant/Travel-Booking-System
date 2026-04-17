package com.travel.bookingapp.repositories;

import com.travel.bookingapp.services.TravelService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<TravelService, Long> {
}