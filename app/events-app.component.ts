import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent { }
