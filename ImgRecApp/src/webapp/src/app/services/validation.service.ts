import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { Compare } from '../models/compare';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private service: string = "ValidationService";

  constructor(private log: LoggingService) { }
  /**
   * 
   * @param message Email object to be validated
   * @returns Validated email object 
   */
  public validRequest(message: Email): Email{
    let validMessage: Email = null;

    if(!(message.name || message.email || message.phone || message.subject || message.message)){
      validMessage = null;
      this.log.debug(`[${this.service}] === user input invalid email details`);
    }
    if(message.name && message.email && message.subject && message.message){
      validMessage = message;
      this.log.debug(`[${this.service}] === user input valid email details`);
    }
    return validMessage;
  }

  /**
   * 
   * @param faces Compare object to be validated
   * @returns Validated Compare object
   */
  public validCompare(faces: Compare) : Compare {
    if(faces.names[0] && faces.names[1]){
      this.log.debug(`[${this.service}] === user input valid amount of names`);
      return faces;
    } else{
      this.log.debug(`[${this.service}] === user input invalid amount of names to faces`);
      return null;
    }
  }

  /**
   * 
   * @param name String to be validated
   * @returns Validate string
   */
  public validUpload(name: string) : string{
    if(name){
      this.log.debug(`[${this.service}] === user input valid name`);
      return name;
    } else{
      this.log.debug(`[${this.service}] === user input invalid name`);
      return null;
    }
  }

  /**
   * 
   * @param file The file set in form data
   * @returns Validated file
   */
  public validFile(file: FormData) : FormData {
    if(file.get('file')){
      this.log.debug(`[${this.service}] === user input valid file`);
      return file;
    } else{
      this.log.debug(`[${this.service}] === user input invalid file`);
      return null;
    }
  }
}
