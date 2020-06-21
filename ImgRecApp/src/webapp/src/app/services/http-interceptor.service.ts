import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private message="";
  private service = "HttpInterceptorService";
  private username = "jenkins";
  private password = "password123";
  private bearer = "Bearer ";
  private cToken = "cToken";
  private jToken = "jToken";

  constructor(private log: LoggingService) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone({
      setHeaders: {
        Authorization: 'Basic ' + btoa(this.username+":"+this.password),
        cToken: this.bearer + localStorage.getItem(this.cToken),
        jToken: this.bearer + localStorage.getItem(this.jToken)
      }
    });
    this.log.info(`[${this.service}] === http headers set`);

    return next.handle(req).pipe(catchError((error: HttpErrorResponse)=>{
      if (error instanceof HttpErrorResponse){
        this.log.info(`[${this.service}] === Internal Error`);
        return throwError('Internal Error');
      } else {
        this.log.info(`[${this.service}] === Server Error`);
        return throwError('Server Error');
      }
    })
    );
    
  }
}
