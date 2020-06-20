import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  public dashAnimate(state: string) : string {
    if(state == "start"){
      return "pulse";
    }
    if(state == "stop"){
      return "";
    }
  }
  
  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  public btnAnimate(state: string) : string {
    if(state == "start"){
      return "heartBeat";
    }
    if(state == "stop"){
      return "";
    }
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  public chartAnimate(state: string) : string {
    if(state == "start"){
      return "tada";
    }
    if(state == "stop"){
      return "";
    }
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  public cogAnimate(state: string) : string {
    if(state == "start"){
      return "rotate";
    }
    if(state == "stop"){
      return "";
    }
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  public cloudAnimate(state: string) : string {
    if(state == "start"){
      return "popup";
    }
    if(state == "stop"){
      return "";
    }
  }
}
