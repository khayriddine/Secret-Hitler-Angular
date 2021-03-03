import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../Models/card';
import { CardsAction, CardType, NotifType, Role, Status } from '../Models/enumerations';
import { Player } from '../Models/player';
import { Vote } from '../Models/vote';
import { CardsDialogComponent } from './dialogs/cards-dialog/cards-dialog.component';
import { NotifDialogComponent } from './dialogs/notif-dialog/notif-dialog.component';
import { YesNoDialogComponent } from './dialogs/yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  nbre: number = 10;
  nbreOfTopPlayers : number = 3;
  player_index : number = 3;
  user_id : number =  4;
  toggleStatus : number = -1;
  top_players_indexes : number[] = [];
  bot_players_indexes : number[] = [];
  mid_players_indexes : number[] = [];
  players_indexes : number[] = [];
  players_toggle_infos : boolean[] = [];
  cardsInHand: Card[] = [
    {
      id: 1,
      cardType: CardType.Fascist
    },
    {
      id: 2,
      cardType: CardType.Liberal
    },
    {
      id: 3,
      cardType: CardType.Fascist
    }
  ];
  players: Player[] = [
    {
      name : "khayri",
      user_id: 1,
      game_id:1,
      cnx_id: "1",
      profile: "akuma.png",
      role: Role.Fascist,
      status: Status.Normal

    },
    {
      name : "sameh",
      user_id: 5,
      game_id:1,
      cnx_id: "5",
      profile: "blanka.png",
      role: Role.Liberal,
      status: Status.Dead

    },
    {
      name : "manel",
      user_id: 2,
      game_id:1,
      cnx_id: "2",
      profile: "chu.png",
      role: Role.Liberal,
      status: Status.Chancellor

    },
    {
      name : "hiba",
      user_id: 3,
      game_id:1,
      cnx_id: "3",
      profile: "plants.png",
      role: Role.Liberal,
      status: Status.President

    },
    {
      name : "imen",
      user_id: 4,
      game_id:1,
      cnx_id: "4",
      profile: "panda.png",
      role: Role.Hitler,
      status: Status.Normal

    },
    {
      name : "ghassen",
      user_id: 6,
      game_id:1,
      cnx_id: "6",
      profile: "anonymou.png",
      role: Role.Fascist,
      status: Status.Normal

    },
    {
      name : "sami",
      user_id: 7,
      game_id:1,
      cnx_id: "7",
      profile: "saga-water.png",
      role: Role.Liberal,
      status: Status.Normal

    }
    ,
    {
      name : "saber",
      user_id: 8,
      game_id:1,
      cnx_id: "8",
      profile: "shocked.png",
      role: Role.Liberal,
      status: Status.Normal

    }
    ,
    {
      name : "firas",
      user_id: 9,
      game_id:1,
      cnx_id: "9",
      profile: "tec-male.png",
      role: Role.Liberal,
      status: Status.Normal

    }
    ,
    {
      name : "ines",
      user_id: 10,
      game_id:1,
      cnx_id: "10",
      profile: "thundercats.png",
      role: Role.Liberal,
      status: Status.Normal

    }
  ];
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
    let ind = this.players.findIndex(p => p.user_id == this.user_id);
    
    let nb = this.players.length;
    
    if(ind >= 0 ){
      if(this.players[ind] != null){
        this.players_toggle_infos = Array.from(this.players, p => false);

      }
      switch(this.nbre){
        case 5:
          this.bot_players_indexes.push(ind);
          this.mid_players_indexes.push((ind+4)%this.nbre);
          this.top_players_indexes.push((ind+3)%this.nbre);
          this.top_players_indexes.push((ind+2)%this.nbre);
          this.mid_players_indexes.push((ind+1)%this.nbre);
          break;
        case 6:
            this.bot_players_indexes.push(ind);
            this.mid_players_indexes.push((ind+5)%this.nbre);
            this.mid_players_indexes.push((ind+1)%this.nbre);
            this.top_players_indexes.push((ind+4)%this.nbre);
            this.top_players_indexes.push((ind+3)%this.nbre);
            this.top_players_indexes.push((ind+2)%this.nbre);
            
            break;
          case 7:
            this.bot_players_indexes.push((ind+6)%this.nbre);
            this.bot_players_indexes.push(ind);
            this.bot_players_indexes.push((ind+1)%this.nbre);
            this.mid_players_indexes.push((ind+5)%this.nbre);
            this.mid_players_indexes.push((ind+2)%this.nbre);
            this.top_players_indexes.push((ind+4)%this.nbre);
            this.top_players_indexes.push((ind+3)%this.nbre);
            
            break;
          case 8:
            this.bot_players_indexes.push((ind+7)%this.nbre);
            this.bot_players_indexes.push(ind);
            this.bot_players_indexes.push((ind+1)%this.nbre);
            this.mid_players_indexes.push((ind+6)%this.nbre);
            this.mid_players_indexes.push((ind+2)%this.nbre);
            this.top_players_indexes.push((ind+5)%this.nbre);
            this.top_players_indexes.push((ind+4)%this.nbre);
            this.top_players_indexes.push((ind+3)%this.nbre);
            
            break;
          case 9:
            this.bot_players_indexes.push((ind+8)%this.nbre);
            this.bot_players_indexes.push(ind);
            this.bot_players_indexes.push((ind+1)%this.nbre);
            this.mid_players_indexes.push((ind+7)%this.nbre);
            this.mid_players_indexes.push((ind+2)%this.nbre);
            this.top_players_indexes.push((ind+6)%this.nbre);
            this.top_players_indexes.push((ind+5)%this.nbre);
            this.top_players_indexes.push((ind+4)%this.nbre);
            this.top_players_indexes.push((ind+3)%this.nbre);
            
            break;
          case 10:
            this.bot_players_indexes.push((ind+9)%this.nbre);
            this.bot_players_indexes.push(ind);
            this.bot_players_indexes.push((ind+1)%this.nbre);
            this.mid_players_indexes.push((ind+8)%this.nbre);
            this.mid_players_indexes.push((ind+2)%this.nbre);
            this.top_players_indexes.push((ind+7)%this.nbre);
            this.top_players_indexes.push((ind+6)%this.nbre);
            this.top_players_indexes.push((ind+5)%this.nbre);
            this.top_players_indexes.push((ind+4)%this.nbre);
            this.top_players_indexes.push((ind+3)%this.nbre);
            
            break;
      }
    }

  }
  openCardDialog(cards: Card[],action: string){
    const dialogRef = this.dialog.open(CardsDialogComponent,{
      data:{cards,action}
    })
  }
  openNotifDialog(msg: string,notifType : NotifType){
    const dialogRef = this.dialog.open(NotifDialogComponent,{
      data:{msg,notifType}
    });
  }
  openVoteOnChancellorDialog(president:string,requestedChancellor:string ){
    let msg : string  = "The President "+president+"  propose "+requestedChancellor+" to be the Chancellor";
    const dialogRef = this.dialog.open(YesNoDialogComponent,
      {
        
        width: '300px',
        position: { top: '25%' },
        data: {msg}
      });
      dialogRef.afterClosed().subscribe(result => {
        let vote : Vote = {
          value : result,
          user_id: this.user_id
        };
        console.log(vote);
      });
  }
  openVoteOnVetoDialog(requestedChancellor:string ){
    let msg : string  = "The chacellor "+requestedChancellor+" propose veto";
    const dialogRef = this.dialog.open(YesNoDialogComponent,
      {
        
        width: '300px',
        position: { top: '25%' },
        data: {msg}
      });
      dialogRef.afterClosed().subscribe(result => {
        let vote : Vote = {
          value : result,
          user_id: this.user_id
        };
        console.log(vote);
      });
  }
  test(){
    this.nbre++;
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  chosePlayer(ind: number){
    if(this.players[ind].user_id == this.user_id){
      if(this.players[ind].status == Status.Dead || this.players[ind].role == Role.Fascist){
        this.togglePlayersInfos();
      }else{
        this.players_toggle_infos[ind] = !this.players_toggle_infos[ind];
      }
      
    }
    else {
      //this.openCardDialog(this.cardsInHand,'peek');
      /*
        if(this.toggleStatus != -1){
          if(this.toggleStatus == ind)
          this.players_toggle_infos[ind] = !this.players_toggle_infos[ind];
          
        }else{
          this.toggleStatus = ind;
          this.players_toggle_infos[ind] = !this.players_toggle_infos[ind];
        }
        */
        //this.openNotifDialog("Choose a member to investigate",NotifType.Investigate);
        //this.openVoteOnVetoDialog("khayri");
        this.openVoteOnChancellorDialog("khayri","sameh");
    }
  }
  togglePlayersInfos(){
    for(let b= 0;b < this.players_toggle_infos.length; b++){
      this.players_toggle_infos[b] = !this.players_toggle_infos[b];
    }
  }

}
