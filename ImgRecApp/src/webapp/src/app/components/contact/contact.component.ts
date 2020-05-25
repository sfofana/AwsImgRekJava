import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { Email } from 'src/app/models/email';
import { takeUntil } from 'rxjs/operators';
import * as keyframe from '../../animations/animation';
import { trigger, keyframes, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => heartBeat', animate(1000, keyframes(keyframe.heartBeat))),
      transition('* => bounce', animate(500, keyframes(keyframe.bounce)))
    ])
  ]
})
export class ContactComponent implements OnInit, OnDestroy {

  private name: string;
  private email: string;
  private phone: string;
  private subject: string;
  private message: string;
  private override: Blob;
  private formData: FormData;
  private success: string;
  private invalid: string;
  private mail = new Email();
  private validMail = new Email();

  private isSpinning = false;
  private button = "";
  private bouncer = "bounce";

  constructor(
    private service: UserService, 
    private memory: SubjectService,
    private validate: ValidationService
    ) { }

  ngOnInit() {
    this.override = new Blob();
    this.formData = new FormData();
    console.log("cToken");
    console.log(localStorage.getItem("cToken"));
  }

  setMail(){
    this.mail.name = this.name;
    this.mail.email = this.email;
    this.mail.phone = this.phone;
    this.mail.subject = this.subject;
    this.mail.message = this.message;
    this.validMail = this.validate.validRequest(this.mail);
  }

  setBlob(mail: Email){
    this.override = new Blob(
      [
        JSON.stringify(mail)
      ],
      {
        type: 'application/json'
    });
    this.formData.append('override', this.override);
  }

  submit(){
    this.setMail();
    this.reset();
    if(this.validMail){
      this.isSpinning = true;
      this.setBlob(this.validMail);
      this.service.sendEmail(this.formData)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(()=>{
        this.success="Message Sent";
        this.isSpinning = false;
      });
    } 
    this.override = new Blob();
    this.formData = new FormData();
  }

  reset(){
    this.name="";
    this.email="";
    this.phone="";
    this.subject="";
    this.message="";
    this.success="";
    this.invalid="";
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
