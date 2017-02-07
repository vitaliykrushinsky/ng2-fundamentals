import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

import { userRoutes } from './user.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [],
})
export class UserModule { }
