import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  public dashAnimate(state: string) : string {
    if(state == "start"){
      return "pulse";
    }
    if(state == "stop"){
      return "";
    }
  }
  
  public btnAnimate(state: string) : string {
    if(state == "start"){
      return "heartBeat";
    }
    if(state == "stop"){
      return "";
    }
  }

  public chartAnimate(state: string) : string {
    if(state == "start"){
      return "tada";
    }
    if(state == "stop"){
      return "";
    }
  }

  public cogAnimate(state: string) : string {
    if(state == "start"){
      return "rotate";
    }
    if(state == "stop"){
      return "";
    }
  }

  public cloudAnimate(state: string) : string {
    if(state == "start"){
      return "popup";
    }
    if(state == "stop"){
      return "";
    }
  }
}
