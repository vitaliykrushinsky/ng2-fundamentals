import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Interface
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    constructor(private http: Http) { };

    loginUser(userName: string, password: string) {
        // Server
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let loginInfo = { username: userName, password: password };

        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do(responce => {
            if (responce) {
                this.currentUser = <IUser>responce.json().user;
            }
        }).catch(error => {
            // return Observable object that contain false value
            return Observable.of(false);
        });
        // Old Api
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'John',
        //     lastName: 'Papa'
        // }
    }

    logout() {
        // Logout on the Client
        this.currentUser = null;

        // Logout on the Server
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/logout', JSON.stringify({}), options)
    }

    // check if user logged on the server when user refresh browser
    checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity').map((responce: any) => {
            // server when user no authenticated return "emty" body 
            // and we convert that to empty object
            if (responce._body) {
                return responce.json();
            } else {
                return {};
            }
        }) // do method work with responce.json() object or {} object
        .do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        // Update user on Client
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        // Update user on Server
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options)
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}