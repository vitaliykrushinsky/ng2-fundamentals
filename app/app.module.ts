import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';

// components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

// services
import { EventService } from './events/shared/event.service';

// 3-rd party services
import { ToastrService } from './common/toastr.service';

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
    providers: [
        EventService,
        ToastrService
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }
