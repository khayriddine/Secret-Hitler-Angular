import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
    
    {path: '', component: ProfileComponent},
    {path: 'auth', component: GuestComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}