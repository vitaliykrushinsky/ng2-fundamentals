import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        BrowserModule
        // HttpModule
    
        // AppRoutingModule,
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }
