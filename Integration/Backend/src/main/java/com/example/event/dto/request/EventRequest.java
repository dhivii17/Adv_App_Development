package com.example.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class EventRequest {
    private Long eventId;
    private String eventName;
    private String eventDescription;
    private String eventImageURL;

}
