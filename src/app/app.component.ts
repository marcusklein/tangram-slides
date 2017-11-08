import { Component, OnInit } from '@angular/core';

import * as Reveal from 'reveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor () {}

  ngOnInit () {
    Reveal.initialize();
  }


}
