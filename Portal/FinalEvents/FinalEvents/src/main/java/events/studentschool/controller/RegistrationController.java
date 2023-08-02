package events.studentschool.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import events.studentschool.entitiy.Registration;
import events.studentschool.service.RegistrationService;

@RestController
@RequestMapping("/api")
public class RegistrationController {

	@Autowired
    private RegistrationService registrationService;

    @PostMapping("/register-event")
    public ResponseEntity<?> registerEvent(@RequestBody Registration registration) {
        Registration registeredStudent = registrationService.registerStudent(registration);
        if (registeredStudent == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register the event");
        }
        return ResponseEntity.ok(registeredStudent);
    }
}