package com.example.event.controller;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import com.example.event.Models.Events;
import com.example.event.Service.Eventsservice;
import com.example.event.dto.response.EventResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class Eventscontroller {
    @Autowired
    private Eventsservice eventsservice;

    // public Eventscontroller(Eventsservice eventsservice) {
    //     this.eventsservice = eventsservice;
    // }

   @GetMapping("/getevents")
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
    @GetMapping("/getevents/{eventName}")
    ResponseEntity<EventResponse>getEvents(@PathVariable("eventName")String eventName){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(eventsservice.getEvents(eventName));
        
    }

    @PostMapping("/postevents")
public Events createEvent(@RequestBody Events event) {
    return eventsservice.createEvent(event);
}


// @PutMapping("/putevents/{eventName}")
// public Events updateEventByName(@PathVariable String eventName, @RequestBody Events updatedEvent) {
//     return eventsservice.updateEventByName(eventName, updatedEvent);
// }
@PutMapping("/updateEvents/{eventname}")
public Events updateEventByName(@PathVariable String eventname, @RequestBody Events updatedEvent){
    return eventsservice.updateEventByName(eventname, updatedEvent);
}


@Transactional
@DeleteMapping("/deleteevents/{eventName}")
public ResponseEntity<String> deleteEventsByName(@PathVariable String eventName) {
    boolean deleted = eventsservice.deleteEventsByEventName(eventName);
    if (deleted) {
        return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no event with the specified name.");
    }
}
}