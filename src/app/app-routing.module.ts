import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
