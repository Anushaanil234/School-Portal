package events.studentschool.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import events.studentschool.entitiy.Payments;

public interface PaymentRepository extends JpaRepository<Payments, Long> {
	public  List<Payments> findAll();

}
