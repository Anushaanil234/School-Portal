package events.studentschool.repo;

import events.studentschool.entitiy.Registration;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
	public  List<Registration> findAll();
}
