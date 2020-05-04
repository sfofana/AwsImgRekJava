import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { Compare } from '../models/compare';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

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

  public validCompare(faces: Compare) : Compare {
    if(faces.name1 && faces.name2){
      return faces;
    } else{
      return null;
    }
  }

  public validUpload(name: string) : string{
    if(name){
      return name;
    } else{
      return null;
    }
  }
}
