package com.example.event.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class BookingResponse {
    private Long bookid;
    private String  pername;
    private String bookemail;
    private String bookphoneno;
    private String  bookeventname;
    private String bookvenue;
    private String decorations;
    private String catering;
    private String photography;
    private String entertainment;
    private String bookpackage;
}
