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
      transition('* => isLeft', animate(300, keyframes(keyframe.fadeInLeft))),
      transition('* => isRight', animate(300, keyframes(keyframe.fadeInRight))),
      transition('isLeft => *', animate(300, keyframes(keyframe.fadeInRight))),
      transition('isRight => *', animate(300, keyframes(keyframe.fadeInLeft))),
      transition('* => pulse', animate(300, keyframes(keyframe.pulse))),
    ])
  ]
})
export class AppComponent {
  
  title = "AWS Image Rekognition";

  private upload = "";
  private compare = "";
  private contact = "";

  constructor(private animation: AnimationService) {
 
  }

  preparedRoute(outlet: RouterOutlet){
    return outlet && 
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation'];
  }

  upAnimate(state: string){
    this.upload = this.animation.dashAnimate(state);
  }

  compAnimate(state: string){
    this.compare = this.animation.dashAnimate(state);
  }

  contAnimate(state: string){
    this.contact = this.animation.dashAnimate(state);
  }
}
