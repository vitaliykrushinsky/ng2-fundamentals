import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ISession } from './../shared/event.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class VoterService {

    constructor(private http: Http) { }

    addVoter(eventId: number, session: ISession, voterName: string) {
        // Client
        session.voters.push(voterName);
        // Server
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        // self subcribtion .subscribe()
        return this.http.post(url, JSON.stringify({}), options)
            .catch(this.handleError).subscribe();
    }
    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => {
            // return true if matches
            return voter === voterName;
        });
    }
    deleteVoter(eventId: number, session: ISession, voterName: string) {
        // Client
        // create new array and include all items except votername
        session.voters = session.voters.filter(voter => voter !== voterName);
        
        // Server
        // self subcribtion .subscribe()
       this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleError).subscribe();
    }

    private handleError(error: Response) {
      return Observable.throw(error.statusText)
    }
}