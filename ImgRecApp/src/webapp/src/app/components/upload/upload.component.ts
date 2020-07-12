import { UserService } from '../../services/user.service';
import { Upload } from '../../models/upload';
import { ValidationService } from '../../services/validation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';
import * as keyframe from '../../animations/animation';
import { AnimationService } from '../../services/animation.service';
import { LoggingService } from '../../services/logging.service';
import { Router } from '@angular/router';
import { trigger, keyframes, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
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
export class UploadComponent implements OnInit, OnDestroy {

  /**
   * Attributes needed for I/O of the Upload UI
   */
  private name: string;
  formData = new FormData();
  private valid: string;
  private validFile: FormData;
  private display: string;
  private results: string;
  private message: string;
  private alert: string;
  private image: string;
  private readonly fileType: string = "data:image/png;base64,";
  private upload: Upload;
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

  constructor(
    private service: UserService, 
    private log: LoggingService,
    private router: Router,
    private memory: SubjectService,
    private validate: ValidationService,
    private animation: AnimationService
    ) { }
  
  ngOnInit() {
    this.name = "";
    this.time = 10000;
    this.dotLoader = false;
    this.component = "UploadComponent";
  }

  /**
   * From UI files selected are set into the form data
   * object
   * @param files The file uploaded
   */
  fileChange(files:any[]) {
    if (files && files.length > 0) {
     let file = files[0];
     this.formData.append('file', file);
    }  
  }

  /**
   * News all elements, adds file name and form data, validates 
   * name using ValidationService, sets spinner to true only if 
   * file name is valid, subscribes to http post request using 
   * UserService, sets all subscription data with its coresponding 
   * elements and spinner is set to false. In case off error, 
   * dot loader is set to true, local storage is cleared and the 
   * UI is redirected to the home page based on the timer set number. 
   */
  uploadFiles(){ 
    this.display = "";
    this.image = "";
    this.results = "";
    
    this.valid = this.validate.validUpload(this.name);
    this.validFile = this.validate.validFile(this.formData);
    if(this.valid && this.validFile){
      this.isSpinning = true;
      this.service.upload(this.valid, this.formData)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(data =>{ 
        this.upload = data;
        this.display = data.name;
        this.results = data.process;
        this.image = this.fileType+data.image;
        this.isSpinning = false;
        this.log.info(`[${this.component}] === successfully processed upload`);
      }, 
      error => {
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

    if (!this.formData.get('file')) {
      this.alert = "Please choose a image to upload";
      this.log.info(`[${this.component}] === user did not choose a image to upload`);
    } else {
      this.alert = "";
    }

    if(!this.name){
      this.message = "Please enter name for image";
      this.log.info(`[${this.component}] === user did not enter a name`);
    } else {
      this.message = "";
    }

    this.name = ""; 
    this.formData = new FormData();
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
  }

}
