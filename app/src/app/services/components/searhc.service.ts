import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearhcService {
  private result = new BehaviorSubject([]);

  constructor() {}

  searhc(searhc: []) {
    console.log('llega', searhc);
    this.result.next(searhc);
  }

  getValue(): any {
    console.log('get value', this.result);
    return this.result.getValue();
  }

  getObservable() {
    return this.result;
  }

  cleanObs() {
    this.result = new BehaviorSubject([]);
  }
}
