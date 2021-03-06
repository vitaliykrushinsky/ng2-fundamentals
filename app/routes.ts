import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Resolver
import { EventListResolver } from './events/events-list-resolver.service';
import { EventResolver } from './events/event-resolver.service';
// Components
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

// import {
//     EventListResolver,
//     EventsListComponent,
//     EventDetailsComponent,
//     CreateEventComponent,
//     CreateSessionComponent
//  } from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    // resolve pre-loading data before load component
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    // /events/1; // using Guard service  
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    // load UserModule when route start with path: 'user'
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];

// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule],
// })
// export class NameRoutingModule { }

// export const routedComponents = [NameComponent];