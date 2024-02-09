
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
@Table(name = "partyevents")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventid;

    @Column(name = "eventname",nullable = false)
    private String eventname;

    @Column(name = "eventvenue",nullable = false)
    private String eventvenue;

    @Column(name = "eventpackage",nullable = false)
    private String eventpackage;

    @Column(name = "eventtiming",nullable = false)
    private String eventtiming;

}
