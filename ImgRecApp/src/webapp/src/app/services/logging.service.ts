import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Logging } from '../models/logging';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private logUrl = environment.logUrl;

  constructor(private http: HttpClient) { }

  /**
   * Sets log message to local storage
   * @param message The logged message
   */
  public info(message: string): void {
    const date: Date = new Date(); 
    const logs: string = localStorage.getItem('log');
    if(logs) {
      localStorage.setItem("log", logs + `${date.toDateString()} : ${message} \n`);
    }
    else {
      localStorage.setItem("log", `${date.toDateString()} : ${message} \n`);
    }
    console.log(`${date.toDateString()} : ${message}`);
  }

  public post(): Observable<Logging> {
    const logs: string = localStorage.getItem('log');
    const logging: Logging = {
      message: logs
    }
    return this.http.post<Logging>(this.logUrl, logging);
  }
}
