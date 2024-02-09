package com.example.event.Service;
import com.example.event.Models.Events;  // Assuming the entity class name is Events
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import com.example.event.Repository.EventsRepo;  // Assuming the repository class name is EventsRepo
import com.example.event.dto.response.EventResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@RequiredArgsConstructor
@Service
public class Eventsservice {
    @Autowired  
    private final EventsRepo eventsRepo;

    // public Eventsservice(EventsRepo eventsRepo) {
    //     this.eventsRepo = eventsRepo;
    // }

    public List<Events> getAllEvents() {
        return eventsRepo.findAll();
    }

    // public Eventsdto getEventByName(String name) {
    //     Events event = eventsRepo.findByEventName(name);
    //     return Eventsmapper.mapToEventsdto(event);
    // }
    public EventResponse getEvents(String eventname){
        Events events = eventsRepo.findByeventname(eventname).orElseThrow();
        var adminEvent=EventResponse.builder().eventid(events.getEventid()).eventname(events.getEventname()).eventvenue(events.getEventvenue()).eventpackage(events.getEventpackage()).eventtiming(events.getEventtiming()).build();
        return adminEvent;
    }
       
    public Events createEvent(Events events) {
        events = eventsRepo.save(events);
        return events;
    }
    

    public Events updateEventByName(String name, Events updatedEvent) {
        Events existingEvent = eventsRepo.findByeventname(name).orElseThrow();
    
        if (existingEvent != null) {
            // Update the fields you want to allow updating
            existingEvent.setEventname(updatedEvent.getEventname());
            existingEvent.setEventvenue(updatedEvent.getEventvenue());
            existingEvent.setEventpackage(updatedEvent.getEventpackage());
            existingEvent.setEventtiming(updatedEvent.getEventtiming());
    
            existingEvent = eventsRepo.save(existingEvent);
            return existingEvent;
        } else {
            // Handle not found scenario
            return null;
        }
    }
    @Transactional
public boolean deleteByeventname(String eventName) {
    Events existingEvent = eventsRepo.findByeventname(eventName).orElseThrow();

    if (existingEvent != null) {
        eventsRepo.delete(existingEvent);
        return true;
    } else {
        return false;
    }
}
}

