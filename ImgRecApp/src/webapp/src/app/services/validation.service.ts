import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { Compare } from '../models/compare';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  /**
   * 
   * @param message Email object to be validated
   * @returns Validated email object 
   */
  public validRequest(message: Email): Email{
    let validMessage = new Email();
    validMessage = null;

    if(!(message.name || message.email || message.phone || message.subject || message.message)){
      validMessage = null;
    }
    if(message.name && message.email && message.subject && message.message){
      validMessage = message;
    }
    return validMessage;
  }

  /**
   * 
   * @param faces Compare object to be validated
   * @returns Returns validated Compare object
   */
  public validCompare(faces: Compare) : Compare {
    if(faces.names[0] && faces.names[1]){
      return faces;
    } else{
      return null;
    }
  }

  /**
   * 
   * @param name String to be validated
   * @returns Returns validate string
   */
  public validUpload(name: string) : string{
    if(name){
      return name;
    } else{
      return null;
    }
  }

  /**
   * 
   * @param file 
   */
  public validFile(file: FormData) : FormData {
    if(file){
      return file;
    } else{
      return null;
    }
  }
}
