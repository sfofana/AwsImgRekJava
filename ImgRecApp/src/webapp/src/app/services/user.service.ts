import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { Observable } from 'rxjs';
import { Upload } from '../models/upload';
import { Compare } from '../models/compare';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private eUrl = environment.emailUrl;
  private compUrl = environment.compare;
  private upUrl = environment.upload;

  constructor(private http: HttpClient) { }

  public sendEmail(message: Email): Observable<Email>{
    return this.http.post<Email>(this.eUrl,message);
  }

  public upload(fileName: string, file: FormData): Observable<Upload>{
    return this.http.post<Upload>(this.upUrl+"/"+fileName, file);
  }

  public compareFaces(faces: Compare) : Observable<Compare> {
    return this.http.post<Compare>(this.compUrl,faces);
  }
}
