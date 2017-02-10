import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService:EventService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    // returning observable events  .map(events => events)
    // resolve method handle subscribe()
    return this.eventService.getEventsById(route.params['id']);
  }
}