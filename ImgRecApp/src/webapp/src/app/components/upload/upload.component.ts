import { UserService } from '../../services/user.service';
import { Upload } from '../../models/upload';
import { ValidationService } from '../../services/validation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  private name: string;
  formData = new FormData();
  private valid: string;
  private validFile: FormData;
  private message: string;
  private upload: Upload;

  constructor(private service: UserService, private validate: ValidationService) { }

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
    console.log(this.formData);
    this.valid = this.validate.validUpload(this.name);
    this.validFile = this.validate.validFile(this.formData);
    if(this.valid && this.validFile){
      this.service.upload(this.valid, this.formData).subscribe(data =>{ 
        this.upload = data;
        this.message = data.process;
      });
    } 
    this.name = "";
    this.message = "";
    this.formData = new FormData();
  }
}
