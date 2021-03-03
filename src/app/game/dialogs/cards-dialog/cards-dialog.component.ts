import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/Models/card';
import { CardsAction, CardType } from 'src/app/Models/enumerations';

@Component({
  selector: 'app-cards-dialog',
  templateUrl: './cards-dialog.component.html',
  styleUrls: ['./cards-dialog.component.css']
})
export class CardsDialogComponent implements OnInit {

  discarded: number = -1;
  constructor(public dialogRef: MatDialogRef<CardsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{cards: Card[],action:string} ) { }

  ngOnInit(): void {
  }
  cardPicture(t: CardType){
    switch(t){
      case CardType.Fascist : return "assets/images/fascist_card.png";
      case CardType.Liberal : return "assets/images/liberal_card.png";
    }
  }

}
