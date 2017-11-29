import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slide-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent implements OnInit {

  @HostBinding('class.slide-body') true;

  constructor() { }

  ngOnInit() {
  }

}
