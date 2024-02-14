package com.example.event.Service;
import com.example.event.Models.Events;
import com.example.event.Repository.EventsRepo;
import com.example.event.dto.response.EventResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Service
public class Eventsservice {

    @Autowired
    private final EventsRepo eventsRepo;

    public List<Events> getAllEvents() {
        return eventsRepo.findAll();
    }

    public EventResponse getEvents(String eventName) {
        Events events = eventsRepo.findByeventName(eventName).orElseThrow();
        var adminEvent = EventResponse.builder()
                .eventName(events.getEventName())
                .eventDescription(events.getEventDescription())
                .eventImageURL(events.getEventImageURL())
                .build();
        return adminEvent;
    }

    public Events createEvent(Events events) {
        events = eventsRepo.save(events);
        return events;
    }

    // public Events updateEventByName(String eventName, Events updatedEvent) {
    //     Events existingEvent = eventsRepo.findByeventName(eventName).orElseThrow();

    //     if (existingEvent != null) {
    //         // Update the fields you want to allow updating
            // existingEvent.setEventName(updatedEvent.getEventName());
            // existingEvent.setEventDescription(updatedEvent.getEventDescription());
            // existingEvent.setEventImageURL(updatedEvent.getEventImageURL());

    //         existingEvent = eventsRepo.save(existingEvent);
    //         return existingEvent;
    //     } else {
    //         // Handle not found scenario
    //         return null;
    //     }
    // }
    public Events updateEventByName(String eventname, Events updatedEvent){
        Events existingEvent = eventsRepo.findByeventName(eventname).orElseThrow();
    
        if(existingEvent != null){
            existingEvent.setEventName(updatedEvent.getEventName());
            existingEvent.setEventDescription(updatedEvent.getEventDescription());
            existingEvent.setEventImageURL(updatedEvent.getEventImageURL());
    
            existingEvent = eventsRepo.save(existingEvent);
            return existingEvent;
        } else {
            return null;
        }
    }

    @Transactional
    public boolean deleteEventsByEventName(String eventName) {
        Events existingBookings = eventsRepo.findByeventName(eventName).orElseThrow();
         if (existingBookings != null) {
             eventsRepo.delete(existingBookings);
             return true; // Deletion successful
         } else {
             return false; // User not found
         }
     }
}
