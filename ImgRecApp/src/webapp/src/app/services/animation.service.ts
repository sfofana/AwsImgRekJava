import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private service: string = "AnimationService";

  constructor(private log: LoggingService) { }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  public dashAnimate(state: string) : string {
    this.log.debug(`[${this.service}] === dashAnimate envoked`);

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
    this.log.debug(`[${this.service}] === btnAnimate envoked`);

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
    this.log.debug(`[${this.service}] === chartAnimate envoked`);

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
    this.log.debug(`[${this.service}] === cogAnimate envoked`);

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
    this.log.debug(`[${this.service}] === cloudAnimate envoked`);

    if(state == "start"){
      return "popup";
    }
    if(state == "stop"){
      return "";
    }
  }
}
