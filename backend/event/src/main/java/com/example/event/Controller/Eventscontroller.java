package com.example.event.Controller;
import jakarta.transaction.Transactional;

import com.example.event.Models.Events;
import com.example.event.Service.Eventsservice;
import com.example.event.dto.response.EventResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/events")
public class Eventscontroller {
    @Autowired
    Eventsservice eventsservice;

    // public Eventscontroller(Eventsservice eventsservice) {
    //     this.eventsservice = eventsservice;
    // }

   @GetMapping
public List<Events> getAllEvents() {
    return eventsservice.getAllEvents();
}


    // @GetMapping("/{eventName}")
    // public ResponseEntity<Eventsdto> getEventByName(@PathVariable String eventName) {
    //     Eventsdto event = eventsservice.getEventByName(eventName);
    //     if (event != null) {
    //         return new ResponseEntity<>(event, HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }
    @GetMapping("/getevents/{eventname}")
    ResponseEntity<EventResponse>getEvents(@PathVariable("eventname")String eventname){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(eventsservice.getEvents(eventname));
        
    }

    @PostMapping
public Events createEvent(@RequestBody Events event) {
    return eventsservice.createEvent(event);
}


@PutMapping("/{eventname}")
public Events updateEventByName(@PathVariable String eventname, @RequestBody Events updatedEvent) {
    return eventsservice.updateEventByName(eventname, updatedEvent);
}


@Transactional
@DeleteMapping("/{eventname}")
public void deleteByeventname(@PathVariable String eventname) {
    eventsservice.deleteByeventname(eventname);
}

}