import { Component, OnInit } from '@angular/core';
import { Event } from '../event.service'
import { EventService } from '../event.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-event',
  templateUrl: './student-event.component.html',
  styleUrls: ['./student-event.component.css']
})
export class StudentEventComponent {
  event!: Event[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents(){
    this.eventService.getEventsList().subscribe(data => {
      this.event = data;
    });
  }

  register(): void {
    this.router.navigate(['register-event']);
  }
}
