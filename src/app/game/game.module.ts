import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { MaterialModule } from '../material-modules';

import { GameComponent } from './game.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { TableComponent } from './table/table.component';
import { YesNoDialogComponent } from './dialogs/yes-no-dialog/yes-no-dialog.component';
import { NotifDialogComponent } from './dialogs/notif-dialog/notif-dialog.component';
import { CardsDialogComponent } from './dialogs/cards-dialog/cards-dialog.component';



@NgModule({
  declarations: [GameComponent, RoomsComponent, CreateGameComponent, PlayerCardComponent, TableComponent, YesNoDialogComponent, NotifDialogComponent, CardsDialogComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ],
  exports: [
    GameComponent,
    RoomsComponent,
    CreateGameComponent
  ]
})
export class GameModule { }
