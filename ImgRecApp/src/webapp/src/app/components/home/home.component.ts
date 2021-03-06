import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { AnimationService } from 'src/app/services/animation.service';
import { User } from '../../models/user';
import { takeUntil } from 'rxjs/operators';
import * as keyframe from '../../animations/animation';
import { LoggingService } from '../../services/logging.service';
import { trigger, keyframes, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => heartBeat', animate(1000, keyframes(keyframe.heartBeat))),
      transition('* => bounce', animate(650, keyframes(keyframe.bounce))),
      transition('* => zoom', animate(300, keyframes(keyframe.zoomIn))),
      transition('* => shake', animate(500, keyframes(keyframe.shake))),
      transition('* => tada', animate(1000, keyframes(keyframe.tada))),
      transition('* => rotate', animate(300, keyframes(keyframe.rotateIn))),
      transition('* => popup', animate(300, keyframes(keyframe.slideInUp)))
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  /**
   * Attributes needed getting access from the backend
   */
  private role: string;
  private user: User;
  private success: string;
  private message: string;
  private component: string;

  /**
   * Attributes needed for the animations and transitions
   */
  private isSpinning: boolean;
  private shaker: string;
  private bouncer: string;
  private button: string;

  constructor(
    private service: UserService, 
    private log: LoggingService,
    private memory: SubjectService,
    private validate: ValidationService,
    private animation: AnimationService) { }

  ngOnInit() {
    this.role = "user";
    this.isSpinning = false;
    this.bouncer = "bounce";
    this.shaker = "shake";
    this.component = "HomeComponent";
    this.log.info(`[${this.component}] === page loaded`);
  }

  /**
   * Resets user hints
   */
  reset(){
    this.success = "";
    this.message = "";
  }

  /**
   * Subscribes to backend API, retreives JWT tokens from the
   * Java backend as well as the C# backend, and stores tokens 
   * in local storage.
   */
  getAccess(){
    this.isSpinning = true;
    this.reset();
    this.user = {
      role: this.role
    }
    this.service.getAccess(this.user)
    .pipe(takeUntil(this.memory.unsubscribe))
    .subscribe(data => { 
      this.success = "Access Granted";
      localStorage.setItem("cToken", data.cToken);
      localStorage.setItem("jToken", data.jToken);
      this.isSpinning = false;
      this.log.info(`[${this.component}] === access granted and JWT set in local storage`);
      this.updateLogs();
    }, error => {
      this.message = "Internal error.. retry or contact me";
      this.isSpinning = false;
      this.log.info(`[${this.component}] === error either server is down or not running`);
    });

  }

  /**
   * Execution wrapper for logging service post request
   */
  updateLogs() {
    this.log.post()
    .pipe(takeUntil(this.memory.unsubscribe))
    .subscribe(() => {
      this.log.debug(`[${this.component}] === successfully updated frontend logs`);
    }, error => {
      this.log.debug(`[${this.component}] === error when updating frontend logs`);
    });
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  btnAnimate(state: string){
    this.button = this.animation.btnAnimate(state);
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}
