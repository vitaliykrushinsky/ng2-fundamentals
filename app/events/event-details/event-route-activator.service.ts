import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) { // grab activated router
        const eventExist = !!this.eventService.getEventsById(+route.params['id']); // convert return result to bollean

        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}