import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetComponent } from './components/reset/reset.component';

import { MaterialModule } from '../material/material.module'
@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
