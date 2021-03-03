import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Secret-Hitler-Angular';
  toggleStatus: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
  toggleSidebar(){
    this.toggleStatus = !this.toggleStatus;
  }
}
