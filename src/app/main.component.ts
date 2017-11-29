import {
  AfterContentInit,
  Component, ContentChildren, ElementRef, forwardRef, HostBinding, Input, OnChanges, OnInit, QueryList, Renderer2,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { SlideComponent } from './slide/slide.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavigationService } from './services/navigation.service';
import { KeyboardService } from './services/keyboardEvent.service';

@Component({
  selector: 'tgs-slides',
  templateUrl: './main.component.html',
  styleUrls: ['./app.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {

  @HostBinding('class.slide-container') true;

  public currentSlide = 0;

  private _slideContainer: ElementRef;

  @ViewChildren(SlideComponent) private _slides: QueryList<SlideComponent>;

  constructor (
    private _keyboardService: KeyboardService,
    private _navigationService: NavigationService,
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  public ngOnInit () {
    this._slideContainer = this._elementRef.nativeElement;
    this._navigationService.registerAnimationContainer(this._slideContainer, this._renderer);
  }

  public ngAfterContentInit () {
    this._setupKeySubscriptions();
  }

  private _setupKeySubscriptions () {
    this._keyboardService.event$.subscribe(event => {
      console.log(this.currentSlide, this._slides);
      if (event && event.code === 'ArrowRight') {
        if (this.currentSlide < this._slides.length - 1) {
            this._navigationService.goToSlide(++this.currentSlide);
        }
      }

      if (event && event.code === 'ArrowLeft') {
        if (this.currentSlide > 0) {
          this._navigationService.goToSlide(--this.currentSlide);
        }
      }
    });
  }

}
