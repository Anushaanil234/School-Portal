import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sort-event',
  templateUrl: './sort-event.component.html',
  styleUrls: ['./sort-event.component.css']
})
export class SortEventComponent implements OnInit {
  standards: string[] = ['1','2','3','4','5', '6', '7','8','9','10','11','12',];
  sections: string[] = ['A', 'B', 'C','All'];
  userTypes: string[] = ['admin','teacher', 'student'];

  selectedStandard: string = '';
  selectedSection: string = '';
  selectedUserType: string = '';

  sortedEvents$: Observable<Map<string, Event[]>> | undefined;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  onStandardChange(event: any) {
    this.selectedStandard = event.target.value;
  }

  onSectionChange(event: any) {
    this.selectedSection = event.target.value;
  }

  onUserTypeChange(event: any) {
    this.selectedUserType = event.target.value;
  }

  sortEvent() {
    if (this.selectedStandard || this.selectedSection || this.selectedUserType) {
      this.sortedEvents$ = this.eventService.sortEvent(this.selectedStandard, this.selectedSection, this.selectedUserType);
    }
  }
}
