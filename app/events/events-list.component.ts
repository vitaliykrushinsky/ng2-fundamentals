import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="thubnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>`
  
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastrService: ToastrService) {}
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  
  thubnailClick(e) {
    this.toastrService.success(e);
  }
 
}