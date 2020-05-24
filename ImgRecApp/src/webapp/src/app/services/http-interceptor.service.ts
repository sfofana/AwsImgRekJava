import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private message="";
  private username = "sfofana";
  private password = "UofH2011";
  private bearer = "Bearer ";
  private cToken = "cToken";
  private jToken = "jtoken";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone({
      setHeaders: {
        Authorization: 'Basic ' + btoa(this.username+":"+this.password),
        cToken: this.bearer + localStorage.getItem(this.cToken),
        jToken: this.bearer + localStorage.getItem(this.jToken)
      }
    });

    return next.handle(req).pipe(catchError((error: HttpErrorResponse)=>{
      if (error instanceof HttpErrorResponse){
        return throwError('Internal Error');
      } else {
        return throwError('Server Error');
      }
    })
    );
    
  }
}
