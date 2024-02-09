package com.example.event.Repository;
import com.example.event.Models.Bookings; // Make sure to import the correct Events class

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface BookingsRepo extends JpaRepository<Bookings, Long> {
   Optional<Bookings> findByBookeventname(String bookeventname);
   
    void deleteByBookeventname(String eventname); 
}