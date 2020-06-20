import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as keyframe from './animations/animation';
import { AnimationService } from './services/animation.service';
import { trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => fade', animate(300, keyframes(keyframe.zoomIn))),
      transition('* => isLeft', animate(300, keyframes(keyframe.fadeInLeft))),
      transition('* => isRight', animate(300, keyframes(keyframe.fadeInRight))),
      transition('isLeft => *', animate(300, keyframes(keyframe.fadeInRight))),
      transition('isRight => *', animate(300, keyframes(keyframe.fadeInLeft))),
      transition('* => pulse', animate(300, keyframes(keyframe.pulse))),
    ])
  ]
})
export class AppComponent {
  
  title = "Bio Unique";

  /**
   * Attributes needed for the animations and transitions
   */
  private upload = "";
  private compare = "";
  private contact = "";

  constructor(private animation: AnimationService) {
 
  }

  /**
   * Determines route animation based on router outlet
   * data
   * @param outlet The data contained in the router 
   * outlet
   */
  preparedRoute(outlet: RouterOutlet){
    return outlet && 
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation'];
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  upAnimate(state: string){
    this.upload = this.animation.dashAnimate(state);
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  compAnimate(state: string){
    this.compare = this.animation.dashAnimate(state);
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  contAnimate(state: string){
    this.contact = this.animation.dashAnimate(state);
  }
}
