import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'tgs-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideComponent {

  @HostBinding('class.slide') true;

}
