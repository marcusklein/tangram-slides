import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Injectable()
export class NavigationService {

  public slidesContainer: ElementRef;
  private _renderer: Renderer2;

  public registerAnimationContainer (slidesContainer: ElementRef, renderer: Renderer2) {
    this._renderer = renderer;
    this.slidesContainer = slidesContainer;
  }

  public goToSlide (slide: number) {
    const newPosition = -100 * slide + 'vw';
    this._renderer.removeStyle(this.slidesContainer, 'left');
    this._renderer.setStyle(this.slidesContainer, 'left', newPosition);
  }

}
