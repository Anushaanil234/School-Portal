import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service'
import { Router } from '@angular/router';
import { registrationData } from '../registration';


@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent {
  registration: registrationData= new registrationData();
  registrationData!: registrationData[];
 

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getRegisterlist();
  }

  private getRegisterlist(){
    this.eventService.getRegisterList().subscribe(data => {
      this.registrationData = data;
    });
  }

  

  
}