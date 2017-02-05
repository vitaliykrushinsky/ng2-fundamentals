import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any;
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.event = this.eventService.getEventsById(+this.route.snapshot.params["id"]); // match 'events/:id'
    }
}