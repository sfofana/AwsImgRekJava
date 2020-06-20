import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  /**
   * Used to watch subscriptions in place
   */
  public unsubscribe = new Subject();



}
