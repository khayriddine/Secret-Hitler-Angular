import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VoteValue } from 'src/app/Models/enumerations';
import { Vote } from 'src/app/Models/vote';
import { VoteRequest } from 'src/app/Models/vote-request';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.css']
})
export class YesNoDialogComponent {
  myVote : Vote;
  possibleVotes: Vote[] = [
    {
      value:0,
      user_id: -1
    },
    {
      value:1,
      user_id: -1
    }
  ];
  constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:{msg:string}) { 
    this.myVote = {
      value: 0,
      user_id: -1
    };
  }

  votePicture(vote:Vote){
    switch(vote.value){
      case 1:
        return '/assets/images/no.jpg';
      case 0:
        return '/assets/images/yes.jpg';
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
