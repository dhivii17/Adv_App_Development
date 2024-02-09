package com.example.event.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventResponse {
    private Long eventid;
    private String eventname;
    private String eventvenue ;
    private String eventpackage;
    private String eventtiming;


}
