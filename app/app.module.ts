import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

// components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

// OR
// import {
//     // components
//     EventsListComponent,
//     EventThumbnailComponent,
//     EventDetailsComponent,
//     CreateEventComponent,
//     CreateSessionComponent
//     // services
//     EventService,
//     EventRouteActivator,
//     EventListResolver
// } from './events/index'

import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

// services
import { EventService } from './events/shared/event.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';

// 3-rd party services
import { ToastrService } from './common/toastr.service';

// routes
import { appRoutes } from './routes';

// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
        // HttpModule
    
        // AppRoutingModule,
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        // long form need to provide function to use
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) { // pass CreateEventComponent component to check state of component
    if (component.isDirty) {
        return confirm('Are you sure want to leave the page without save?')
    }
    return true;
}
