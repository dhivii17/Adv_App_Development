package com.example.event;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication

@OpenAPIDefinition(
		info =@Info(
				title = "Planaroma",
				version = "1.1.2",
				description = "Event Planner",
				contact = @Contact(
						name ="Dhivya",
						email = "727721euit034@skcet.ac.in"
						)
				)
		)
public class EventApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventApplication.class, args);
	}

}
