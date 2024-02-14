package com.example.event.Repository;
import com.example.event.Models.Events; // Make sure to import the correct Events class

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface EventsRepo extends JpaRepository<Events, Long> {
    Optional<Events> findByeventName(String eventName);
    // Events findByEventName(String eventName);
    void deleteByEventName(String eventName);
}
