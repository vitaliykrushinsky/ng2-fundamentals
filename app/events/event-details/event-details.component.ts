import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

// Interface
import { IEvent, ISession } from './../shared/event.model';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    a { cursor: pointer }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEventsById(+params["id"]);
            // reset state when route changes
            this.addMode = false;
        })
        // this dosens't work when routing to the same component; /events/1 changes to /events/2
        // this.event = this.eventService.getEventsById(+this.route.snapshot.params["id"]); // match 'events/:id'
    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session: ISession) {
        // find max value session id
        const nextId = Math.max.apply(null, this.event.sessions.map(item => item.id))
        session.id = nextId + 1;
        // add session to event
        this.event.sessions.push(session);
        // update event on service
        this.eventService.updateEvent(this.event);
        // toggle in session list mode
        this.addMode = false;
    }
    cancelAddSession() {
        this.addMode = false;
    }

}