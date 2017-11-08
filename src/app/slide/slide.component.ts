import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'section',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlideComponent implements OnInit {

  @HostBinding('class.slide') true;

  constructor() { }

  ngOnInit() {
  }

}
