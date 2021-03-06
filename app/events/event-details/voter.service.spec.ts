import { Observable } from 'rxjs/Rx';
import { ISession } from './../shared/event.model';
import { VoterService } from './voter.service';

describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp;    
    // Create initial state
    beforeEach(() => {
        // create empty mockHttp object with two methods 'delete' and 'post'
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp); 
    })
    // Change state
    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable.of(false));
            // force typing if it doesn't have all properties <ISession>session
            // delete voter
            voterService.deleteVoter(3, <ISession>session, 'joe')
            
            // Expect
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

        it('should call http.delete with the right URL', () => {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(3, <ISession>session, "joe");

            
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        })
    });

    describe('addVoter', () => {
        it('should call http.post with the right URL', () => {
            var session = { id: 6, voters: ["john"] };
            mockHttp.post.and.returnValue(Observable.of(false));

            voterService.addVoter(3, <ISession>session, "joe");

            
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', '{}', jasmine.any(Object));
        })
    })
})