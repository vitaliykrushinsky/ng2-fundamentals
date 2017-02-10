import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService) {

  }

  resolve() {
    // returning observable events  .map(events => events)
    // resolve method handle subscribe()
    return this.eventService.getEvents();
  }
}