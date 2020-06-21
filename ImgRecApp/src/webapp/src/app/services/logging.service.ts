import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Logging } from '../models/logging';
import { formatDate } from '@angular/common';
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
    const rawData: Date = new Date(); 
    const date: string = formatDate(rawData, 'medium', 'en-us');
    const logs: string = localStorage.getItem('log');
    if(logs) {
      localStorage.setItem("log", logs + `${date} : ${message} \n`);
    }
    else {
      localStorage.setItem("log", `${date} : ${message} \n`);
    }
    console.log(`${date} : ${message}`);
  }

  /**
   * Sets log to the console
   * @param message The logged message
   */
  public debug(message: string): void {
    const rawData: Date = new Date(); 
    const date: string = formatDate(rawData, 'medium', 'en-us');
    console.log(`${date} : ${message}`);
  }

  /**
   * Observable http post request, sends all existing logs
   * during front end session
   */
  public post(): Observable<Logging> {
    const logs: string = localStorage.getItem("log");
    const logging: Logging = {
      message: logs
    }
    localStorage.removeItem("log");
    return this.http.post<Logging>(this.logUrl, logging);
  }
}
