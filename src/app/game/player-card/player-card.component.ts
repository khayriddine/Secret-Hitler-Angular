import { Component, Input, OnInit } from '@angular/core';
import { Role, Status } from 'src/app/Models/enumerations';
import { Player } from 'src/app/Models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  constructor() { }
  @Input() player: Player;
  @Input() showRole: boolean = false;
  ngOnInit(): void {

  }
  displayImg(){
    if(this.showRole){
      switch(this.player.role){
        case Role.Liberal : return "assets/images/liberal1.png";
        break;
        case Role.Fascist : return "assets/images/fascist1.png";
        break;
        case Role.Hitler : return "assets/images/hitler_1.png";
        break;
      }
    }else {
      return "assets/images/icons/"+this.player.profile;
    }

  }
  displayTitle(){
    if(this.showRole){
      switch(this.player.role){
        case Role.Liberal : return "Liberal";
        break;
        case Role.Fascist : return "Fascist";
        break;
        case Role.Hitler : return "Hitler";
        break;
      }
    }else {
      return this.player.name;
    }
  }
  style(){
    switch(this.player.status){
      case Status.Normal : return "normal";
      case Status.Dead : return "dead";
      case Status.President : return "president";
      case Status.Chancellor : return "chancellor";
    }
  }

}
