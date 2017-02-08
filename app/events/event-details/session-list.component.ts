import { Component, OnInit, Input, OnChanges } from '@angular/core';
// Interface
import { ISession } from './../shared/event.model';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    visibleSessions: ISession[] = [];
    @Input() filterBy: string;
    @Input() sortBy: string;
    constructor() { }

    // invoke when this.filterBy and thisthis.sortBy changes
    ngOnChanges() {
        if (this.sessions) {
            //filter
            this.filterSession(this.filterBy);
            // sortings
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSession(filter) { 
        if (filter === 'all') {
            // Make copy of array
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(item => {
                // filter by level
                return item.level.toLocaleLowerCase() === filter
            })
        }
    }

}

// Sorting
function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}    