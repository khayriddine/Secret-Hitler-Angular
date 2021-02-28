import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GuestComponent } from './guest/guest.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [SigninComponent, SignupComponent, GuestComponent,ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    GuestComponent,
    ProfileComponent
  ]
})
export class UserModule { }
