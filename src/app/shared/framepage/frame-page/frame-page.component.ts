import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-page',
  template: '<app-nav-bar></app-nav-bar><router-outlet></router-outlet>'
})
export class FramePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
