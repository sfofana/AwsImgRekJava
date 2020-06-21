import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { Observable } from 'rxjs';
import { Upload } from '../models/upload';
import { Compare } from '../models/compare';
import { User } from '../models/user';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private service = "UserService";
  private sessionUrl = environment.session;
  private eUrl = environment.emailUrl;
  private compUrl = environment.compare;
  private upUrl = environment.upload;

  constructor(private http: HttpClient, private log: LoggingService) { }

  /**
   * Observable http post request, retrieves JWT tokens
   * and allows for access to full backend with tokens
   * @param user The user details to send
   */
  public getAccess(user: User): Observable<User> {
    this.log.debug(`[${this.service}] === getAccess envoked`);
    return this.http.post<User>(this.sessionUrl, user);
  }

  /**
   * Observable http post request, sends a request to 
   * sfofana email service
   * @param message The messge details to send
   */
  public sendEmail(message: FormData): Observable<Email>{
    this.log.debug(`[${this.service}] === sendEmail envoked`);
    return this.http.post<Email>(this.eUrl,message);
  }

  /**
   * Observable http post request for uploading images
   * @param fileName The name of file
   * @param file The image to upload
   * @returns Results of file upload
   */
  public upload(fileName: string, file: FormData): Observable<Upload>{
    this.log.debug(`[${this.service}] === upload envoked`);
    return this.http.post<Upload>(this.upUrl+"/"+fileName, file);
  }

  /**
   * Observable http post request for comparing faces
   * @param faces The faces to compare
   * @returns Similarity results of faces compared
   */
  public compareFaces(faces: Compare) : Observable<Compare> {
    this.log.debug(`[${this.service}] === compareFaces envoked`);
    return this.http.post<Compare>(this.compUrl,faces);
  }
}
