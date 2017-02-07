import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';



export const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild|Root(routes)],
//   exports: [RouterModule],
// })
// export class NameRoutingModule { }

// export const routedComponents = [NameComponent];