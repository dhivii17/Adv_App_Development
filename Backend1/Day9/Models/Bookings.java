package com.example.event.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bookinggs")
public class Bookings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookid;

    @Column(name = "pername",nullable = false)
    private String  pername;

    @Column(name = "bookemail",nullable = false)
    private String bookemail;

    @Column(name = "bookphoneno",nullable = false)
    private String bookphoneno;

    @Column(name = "bookeventname",nullable = false)
    private String  bookeventname;

    @Column(name = "bookvenue",nullable = false)
    private String bookvenue;

    @Column(name = "decorations",nullable = false)
    private String decorations;

    @Column(name = "catering",nullable = false)
    private String catering;

    @Column(name = "photography",nullable = false)
    private String photography;

    @Column(name = "entertainment",nullable = false)
    private String entertainment;

    @Column(name = "bookpackage",nullable = false)
    private String bookpackage;

}