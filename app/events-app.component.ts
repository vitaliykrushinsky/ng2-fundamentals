import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
    moduleId: module.id,
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent implements OnInit { 
    constructor(private authService: AuthService) { }
    ngOnInit() {
        // check if user logged on the server when user refresh browser
        this.authService.checkAuthenticationStatus();
    }
}
