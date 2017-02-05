import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    template: `
    <h1>New Event</h1>
    <button class="btn btn-primary">Save</button>
    <button class="btn btn-warning" (click)="cancel()">Cancel</button>
    `
})
export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    constructor(private router: Router) { }

    ngOnInit() { }

    cancel() {
        this.router.navigate(['/events']);
    }
}