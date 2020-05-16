import { UserService } from '../../services/user.service';
import { Upload } from '../../models/upload';
import { ValidationService } from '../../services/validation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';
import * as keyframe from '../../animations/animation';
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
      transition('* => shake', animate(500, keyframes(keyframe.shake)))
    ])
  ]
})
export class UploadComponent implements OnInit, OnDestroy {

  private name: string;
  formData = new FormData();
  private valid: string;
  private validFile: FormData;
  private display: string;
  private results: string;
  private message: string;
  private image: string;
  private readonly fileType: string = "data:image/png;base64,";
  private upload: Upload;

  private button = "";
  private bouncer = "bounce";
  private zoomIn = "zoom";
  private shaker = "shake";
  private isSpinning = false;

  constructor(
    private service: UserService, 
    private memory: SubjectService,
    private validate: ValidationService
    ) { }
  
  ngOnInit() {
    this.name = "";
  }

  fileChange(files:any[]) {
    if (files && files.length > 0) {
     let file = files[0];
     this.formData.append('file', file);
    }  
  }

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
      }, 
      error => {
        this.message = "Internal error.. retry or contact me";
        this.isSpinning = false;
      });
    } 
    if(!this.name){
      this.message = "Please enter name for image";
    } else{
      this.message = "";
    }
    this.name = "";    
    this.formData = new FormData();
  }

  btnAnimate(state: string){
    if(!this.button){
      this.button = state;
    }
  }

  btnReset(){
    this.button = "";
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

}
