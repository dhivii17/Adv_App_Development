package com.example.event.Service;

import com.example.event.Models.Bookings;
import com.example.event.Repository.BookingsRepo;
import com.example.event.dto.response.BookingResponse;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class Bookingsservice {

    private final BookingsRepo bookingsRepo;

    public List<Bookings> getAllBookings() {
        return bookingsRepo.findAll();
    }
    public BookingResponse getBooking(String bookeventname){
        Bookings bookings = bookingsRepo.findByBookeventname(bookeventname).orElseThrow();
        var userBook = BookingResponse.builder().bookid(bookings.getBookid()).pername(bookings.getPername()).bookemail(bookings.getBookemail()).bookphoneno(bookings.getBookphoneno()).bookeventname(bookings.getBookeventname()).bookvenue(bookings.getBookvenue()).decorations(bookings.getDecorations()).catering(bookings.getCatering()).entertainment(bookings.getEntertainment()).bookpackage(bookings.getBookpackage()).photography(bookings.getPhotography()).build();
        return userBook;
    }

    public Bookings createBooking(Bookings booking) {
        return bookingsRepo.save(booking);
    }

    public Bookings updateBookingBybookeventname(String bookeventname, Bookings updatedBooking) {
        Bookings existingBooking = bookingsRepo.findByBookeventname(bookeventname).orElseThrow();

        if (existingBooking != null) {
            // Update the fields you want to allow updating
            existingBooking.setPername(updatedBooking.getPername());
            existingBooking.setBookemail(updatedBooking.getBookemail());
            existingBooking.setBookphoneno(updatedBooking.getBookphoneno());
            existingBooking.setBookeventname(updatedBooking.getBookeventname());
            existingBooking.setBookvenue(updatedBooking.getBookvenue());
            existingBooking.setDecorations(updatedBooking.getDecorations());
            existingBooking.setCatering(updatedBooking.getCatering());
            existingBooking.setPhotography(updatedBooking.getPhotography());
            existingBooking.setEntertainment(updatedBooking.getEntertainment());
            existingBooking.setBookpackage(updatedBooking.getBookpackage());

            existingBooking = bookingsRepo.save(existingBooking);
            return existingBooking;
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional
    public boolean deleteBookingBybookeventname(String bookeventname) {
        Bookings existingBooking = bookingsRepo.findByBookeventname(bookeventname).orElseThrow();

        if (existingBooking != null) {
            bookingsRepo.delete(existingBooking);
            return true;
        } else {
            return false;
        }
    }
}
