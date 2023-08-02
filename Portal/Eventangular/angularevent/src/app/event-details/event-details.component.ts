import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

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
    event!: Event;
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.event = new Event();
    this.eventService.getEventById(this.id).subscribe( data => {
      this.event= data;
    });
  }


}
