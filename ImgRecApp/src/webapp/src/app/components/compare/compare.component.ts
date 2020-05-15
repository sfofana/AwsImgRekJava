import { UserService } from '../../services/user.service';
import { Compare } from '../../models/compare';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
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
  private isSpinning = false;
  private readonly fileType: string = "data:image/png;base64,";

  constructor(
    private service: UserService, 
    private memory: SubjectService,
    private validate: ValidationService
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

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

}
