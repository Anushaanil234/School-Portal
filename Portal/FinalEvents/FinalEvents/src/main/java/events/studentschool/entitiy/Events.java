package events.studentschool.entitiy;

import java.math.BigDecimal;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "eventsdetails")
public class Events {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;
	
	@Column(name="options")
	private String options;


	@Column(name = "start_date")
	private LocalDate start_date;

	@Column(name = "end_date")
	private LocalDate end_date;
	
	@Column(name = "location")
	private String location;
	
	@Column(name = "category")
	private String category;

	@Column(name="attendee_limit")
	private int attendee_limit;
	
	@Column(name="registration_deadline")
	private LocalDate registration_deadline;
	
	@Column(name="fee")
	private BigDecimal fee;
	
	@Column(name="organizer")
	private String organizer;
	
	@Column(name="contact_person")
	private String contact_person;
	
	@Column(name="contact_email")
	private String contact_email;

   public Events() {
		super();
	}
    
   public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}
	
	public String getOptions() {
		return options;
	}

	public void setOptions(String options) {
		this.options = options;
	}

	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public LocalDate getStart_date() {
		return start_date;
	}


	public void setStart_date(LocalDate start_date) {
		this.start_date = start_date;
	}


	public LocalDate getEnd_date() {
		return end_date;
	}


	public void setEnd_date(LocalDate end_date) {
		this.end_date = end_date;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public int getAttendee_limit() {
		return attendee_limit;
	}


	public void setAttendee_limit(int attendee_limit) {
		this.attendee_limit = attendee_limit;
	}


	public LocalDate getRegistration_deadline() {
		return registration_deadline;
	}


	public void setRegistration_deadline(LocalDate registration_deadline) {
		this.registration_deadline = registration_deadline;
	}


	public BigDecimal getFee() {
		return fee;
	}


	public void setFee(BigDecimal fee) {
		this.fee = fee;
	}


	public String getOrganizer() {
		return organizer;
	}


	public void setOrganizer(String organizer) {
		this.organizer = organizer;
	}


	public String getContact_person() {
		return contact_person;
	}


	public void setContact_person(String contact_person) {
		this.contact_person = contact_person;
	}


	public String getContact_email() {
		return contact_email;
	}


	public void setContact_email(String contact_email) {
		this.contact_email = contact_email;
	}

   
	public Events orElseThrow(Object object) {
		
		return null;
	}


    
	
	public static void put(String options) {
		// TODO Auto-generated method stub
		
	}
	
	

	

	
}
	