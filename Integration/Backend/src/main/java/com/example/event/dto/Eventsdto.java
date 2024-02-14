package com.example.event.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Eventsdto {
    private Long Id;
    private String eventName;
    private String Venue ;
    private String Package;
    private String Timing;

}