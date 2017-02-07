import { Component, OnInit, Input } from '@angular/core';
// Interface
import { ISession } from './../shared/event.model';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit {
    @Input() sessions: ISession[];
    constructor() { }

    ngOnInit() { }
}