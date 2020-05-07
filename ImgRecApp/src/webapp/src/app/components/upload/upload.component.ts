import { UserService } from '../../services/user.service';
import { Upload } from '../../models/upload';
import { ValidationService } from '../../services/validation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  private name: string;
  formData = new FormData();
  private valid: string;
  private validFile: FormData;
  private message: string;
  private upload: Upload;

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
    this.valid = this.validate.validUpload(this.name);
    this.validFile = this.validate.validFile(this.formData);
    if(this.valid && this.validFile){
      this.service.upload(this.valid, this.formData)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(data =>{ 
        this.upload = data;
        this.message = data.process;
      }, 
      error => this.message = "Internal error.. retry or contact me");
    } 
    if(!this.name){
      this.message = "Please enter name for image";
    } else{
      this.message = "";
    }
    this.name = "";    
    this.formData = new FormData();
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

}
