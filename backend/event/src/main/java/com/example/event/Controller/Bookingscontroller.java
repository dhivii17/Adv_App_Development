package com.example.event.Controller;

import com.example.event.Models.Bookings;
import com.example.event.Service.Bookingsservice;
import com.example.event.dto.response.BookingResponse;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/user")
public class Bookingscontroller {

    @Autowired
   private final Bookingsservice bookingsservice;

    @GetMapping("/getbookings")
    public List<Bookings> getAllBookings() {
        return bookingsservice.getAllBookings();
    }
    @GetMapping("/getbookings/{bookeventname}")
    public ResponseEntity<BookingResponse> getBooking(@PathVariable("bookeventname") String bookeventname){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(bookingsservice.getBooking(bookeventname));
    }

     
    @PostMapping("/postbook")
    public Bookings createBooking(@RequestBody Bookings booking) {
        return bookingsservice.createBooking(booking);
    }

    @PutMapping("/updatebook/{bookeventname}")
    public Bookings updateBookingBybookeventname(@PathVariable String bookeventname, @RequestBody Bookings updatedBooking) {
        return bookingsservice.updateBookingBybookeventname(bookeventname, updatedBooking);
    }

    @DeleteMapping("/deletebook/{bookeventname}")
    public void deleteBookingBybookeventname(@PathVariable String bookeventname) {
        bookingsservice.deleteBookingBybookeventname(bookeventname);
    }
}
