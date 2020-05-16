import { UserService } from '../../services/user.service';
import { Compare } from '../../models/compare';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';
import * as keyframe from '../../animations/animation';
import { AnimationService } from '../../services/animation.service';
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

  private img1: string;
  private img2: string;
  private names: string[];
  private faces: Compare;
  private images: string[] = [];
  private details: string[] = [];
  private results: number;
  private valid: Compare;
  private message: string;

  private button = "";
  private bouncer = "bounce";
  private zoomIn = "zoom";
  private shaker = "shake";
  private chart = "";
  private cog = "";
  private cloud = "";
  private isSpinning = false;
  private readonly fileType: string = "data:image/png;base64,";

  constructor(
    private service: UserService, 
    private memory: SubjectService,
    private validate: ValidationService,
    private animation: AnimationService
    ) { }
  
  ngOnInit() {
    this.img1 = "";
    this.img2 = "";
  }

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
      }, error => {
        this.message = "Internal error.. retry or contact me";
        this.isSpinning = false;
      });
    } 
    if(!this.img1 || !this.img2){
      this.message = "Please enter both names of faces to compare";
    } else{
      this.message = "";
    }
    this.img1 = "";
    this.img2 = "";
    
  }

  btnAnimate(state: string){
    this.button = this.animation.btnAnimate(state);
  }

  chartAnimate(state: string){
    this.chart = this.animation.chartAnimate(state);
  }

  cogAnimate(state: string){
    this.cog = this.animation.cogAnimate(state);
  }

  cloudAnimate(state: string){
    this.cloud = this.animation.cloudAnimate(state);
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

}
