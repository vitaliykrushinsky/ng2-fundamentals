import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { UpvoteComponent } from './events/event-details/upvote.component';

// OR
// import {
//     // components
//     EventsListComponent,
//     EventThumbnailComponent,
//     EventDetailsComponent,
//     CreateEventComponent,
//     CreateSessionComponent,
//     SessionListComponent,
//     UpvoteComponent,
//     LocationValidator,
//     // services
//     EventService,
//     EventListResolver,
//     EventResolver,
//     DurationPipe,
//     VoterService
// } from './events/index'

// import {
//     JQ_TOKEN, 
//     TOASTR_TOKEN, 
//     Toastr,
//     CollapsibleWellComponent,
//     SimpleModalComponent,
//     ModalTriggerComponent
// } from './common/index';

import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

// Services
import { EventService } from './events/shared/event.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { VoterService } from './events/event-details/voter.service';
import { EventResolver } from './events/event-resolver.service';

// Pipes
import { DurationPipe } from './events/shared/duration.pipe';

// 3-rd party services
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';

// Directives
import { ModalTriggerComponent } from './common/modal-trigger.directive';
import { LocationValidator } from './events/location-validator.directive';

// Routes
import { appRoutes } from './routes';

// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

// tell tsc commpile that this object on global scope
declare let toastr: Toastr; 
declare let jQuery : Object;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    
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
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerComponent,
        UpvoteComponent,
        LocationValidator
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventListResolver,
        AuthService,
        VoterService,
        EventResolver
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
