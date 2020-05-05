import { UserService } from '../../services/user.service';
import { Compare } from '../../models/compare';
import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  private img1: string;
  private img2: string;
  private faces: Compare;
  private valid: Compare;
  private message: string;

  constructor(private service: UserService, private validate: ValidationService) { }

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
      this.service.compareFaces(this.valid).subscribe(data => this.faces = data, error => this.message = "There is no similarity");
    } 
    this.img1 = "";
    this.img2 = "";
  }
}
