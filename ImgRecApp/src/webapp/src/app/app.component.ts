import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as keyframe from './animations/animation';
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
      transition('isRight => *', animate(300, keyframes(keyframe.fadeInLeft)))
    ])
  ]
})
export class AppComponent {
  
  title = "AWS Image Rekognition";

  preparedRoute(outlet: RouterOutlet){
    return outlet && 
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation'];
  }
}
