import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
    id!: number;
    name!: string;
    options!: string;
    description!:string;
    start_date!:Date;
    end_date!:Date;
    location!:string;
    category!:string;
    attendee_limit!:number;
    registration_deadline!:Date;
    fee!:number;
    organizer!:string;
    contact_person!:string;
    contact_email!:string;
  event: Event = new Event();
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.eventService.getEventById(this.id).subscribe(data => {
      this.event = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.eventService.updateEvent(this.id, this.event).subscribe( data =>{
      this.goToEventList();
    
    }
    , error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/events']);
  }
}
