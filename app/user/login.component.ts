import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styles: [
        `em {float: right; color: #e05c65; padding-left: 10px}`
    ]
})
export class LoginComponent implements OnInit {
    loginInvalid: boolean = false;
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    login(formValues, form) {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe(responce => {
                if (!responce) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            })
        console.log(form);
    }
    cancel() {
        this.router.navigate(['events']);
    }
}