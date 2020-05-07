import { UserService } from '../../services/user.service';
import { Compare } from '../../models/compare';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit, OnDestroy {

  private img1: string;
  private img2: string;
  private faces: Compare;
  private valid: Compare;
  private message: string;

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
    this.faces = {
      name1: this.img1,
      name2: this.img2
    };
    this.valid = this.validate.validCompare(this.faces);
    if(this.valid){
      this.service.compareFaces(this.valid)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(data => this.faces = data, error => this.message = "Internal error.. retry or contact me");
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
