import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class KeyboardService {

  public event$ = new BehaviorSubject<KeyboardEvent>(null);

  constructor() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      this.event$.next(event);
    });
  }

}
