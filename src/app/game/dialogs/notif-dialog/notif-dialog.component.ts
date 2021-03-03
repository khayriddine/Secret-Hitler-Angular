import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notif } from 'src/app/Models/Notif';

@Component({
  selector: 'app-notif-dialog',
  templateUrl: './notif-dialog.component.html',
  styleUrls: ['./notif-dialog.component.css']
})
export class NotifDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotifDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:Notif) { }

  ngOnInit(): void {
  }

}
