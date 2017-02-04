import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
    `
})
export class EventsAppComponent { }
