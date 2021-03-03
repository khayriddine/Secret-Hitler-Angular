import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.toggleEvent.emit();
  }

}
