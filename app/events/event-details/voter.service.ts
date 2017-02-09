import { Injectable } from '@angular/core';
import { ISession } from './../shared/event.model';

@Injectable()
export class VoterService {

    constructor() { }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }
    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => {
            // return true if matches
            return voter === voterName;
        });
    }
    deleteVoter(session: ISession, voterName: string) {
        // create new array and include all items except votername
        session.voters = session.voters.filter(voter => voter !== voterName);
    }
}