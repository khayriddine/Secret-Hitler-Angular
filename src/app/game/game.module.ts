import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameRoutingModule } from './game-routing.module';



@NgModule({
  declarations: [RoomsComponent, CreateGameComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  exports: [
    RoomsComponent,
    CreateGameComponent
  ]
})
export class GameModule { }
