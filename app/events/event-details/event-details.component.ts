import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';

// Interface
import { IEvent } from './../shared/event.model';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.event = this.eventService.getEventsById(+this.route.snapshot.params["id"]); // match 'events/:id'
    }
}