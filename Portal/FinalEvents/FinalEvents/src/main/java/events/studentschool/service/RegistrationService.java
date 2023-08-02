package events.studentschool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import events.studentschool.entitiy.Registration;
import events.studentschool.repo.RegistrationRepository;

@Service
public class RegistrationService {
	
	private RegistrationRepository registrationRepository;

	 @Autowired
	    public RegistrationService(RegistrationRepository registrationRepository) {
	        this.registrationRepository = registrationRepository;
	    }
	 
    public  Registration registerStudent(Registration registration) {
        return registrationRepository.save(registration);
    }  

}


    

   

   

