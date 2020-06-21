import { UserService } from '../../services/user.service';
import { Compare } from '../../models/compare';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';
import * as keyframe from '../../animations/animation';
import { AnimationService } from '../../services/animation.service';
import { LoggingService } from '../../services/logging.service';
import { Router } from '@angular/router';
import { trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
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
export class CompareComponent implements OnInit, OnDestroy {

  /**
   * Attributes needed for I/O of the Compare UI
   */
  private img1: string;
  private img2: string;
  private names: string[];
  private faces: Compare;
  private images: string[] = [];
  private details: string[] = [];
  private results: number;
  private valid: Compare;
  private message: string;
  private component: string;

  /**
   * Attributes needed for the animations and transitions
   */
  private button = "";
  private bouncer = "bounce";
  private zoomIn = "zoom";
  private shaker = "shake";
  private chart = "";
  private cog = "";
  private cloud = "";
  private isSpinning = false;
  private time: number;
  private dotLoader: boolean;
  /**
   * Image src from string format
   */
  private readonly fileType: string = "data:image/png;base64,";

  constructor(
    private service: UserService,
    private log: LoggingService, 
    private router: Router,
    private memory: SubjectService,
    private validate: ValidationService,
    private animation: AnimationService
    ) { }
  
  ngOnInit() {
    this.img1 = "";
    this.img2 = "";
    this.time = 10000;
    this.dotLoader = false;
    this.component = "CompareComponent";
    this.log.info(`[${this.component}] === page loaded`);
  }

  /**
   * News all elements, adds image names to Compare object
   * names attribute, validates names using ValidationService,
   * sets spinner to true only if names are valid, subscribes
   * to http post request using UserService, sets all subscription
   * data with its coresponding elements and spinner is set to false. 
   * In case off error, dot loader is set to true, local storage 
   * is cleared and the UI is redirected to the home page based
   * on the timer set number. 
   */
  compareFaces(){
    this.names = [];
    this.images = [];
    this.details = [];
    this.results = 0;
    this.message = "";

    this.names.push(this.img1);
    this.names.push(this.img2);
    this.faces = {
      names: this.names
    };

    this.valid = this.validate.validCompare(this.faces);
    if(this.valid){
      this.isSpinning = true;
      this.service.compareFaces(this.valid)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(data =>{ 
        this.faces = data;
        data.images.forEach(res => this.images.push(this.fileType + res));
        this.details = data.details;
        this.results = data.results;
        this.isSpinning = false;
        this.log.info(`[${this.component}] === successfully retrieved results`);
      }, error => {
        this.message = "Internal error.. retry or contact me";
        this.isSpinning = false;
        this.dotLoader = true;
        this.log.info(`[${this.component}] === error either server not running or JWT token is expired`);
        localStorage.clear();
        setTimeout(()=>this.router.navigate(['/home']),this.time);       
      });

      this.log.post()
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(() => {
        this.log.debug(`[${this.component}] === successfully updated frontend logs`);
      }, error => {
        this.log.debug(`[${this.component}] === error when updating frontend logs`);
      });
    } 
    if(!this.img1 || !this.img2){
      this.message = "Please enter both names of faces to compare";
      this.log.info(`[${this.component}] === user did not enter 2 names`);
    } else{
      this.message = "";
    }

    this.img1 = "";
    this.img2 = "";
    
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  btnAnimate(state: string){
    this.button = this.animation.btnAnimate(state);
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  chartAnimate(state: string){
    this.chart = this.animation.chartAnimate(state);
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  cogAnimate(state: string){
    this.cog = this.animation.cogAnimate(state);
  }

  /**
   * 
   * @param state Sets the state in animation using the AnimationService, 
   * in this case either stop or start
   */
  cloudAnimate(state: string){
    this.cloud = this.animation.cloudAnimate(state);
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
    this.log.info(`[${this.component}] === unsubscribe from compareFaces API`);
  }

}
