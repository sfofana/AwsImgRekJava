import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SubjectService } from 'src/app/services/subject.service';
import { ValidationService } from 'src/app/services/validation.service';
import { Email } from 'src/app/models/email';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  private name: string;
  private email: string;
  private phone: string;
  private subject: string;
  private message: string;
  private success: string;
  private invalid: string;
  private mail = new Email();
  private validMail = new Email();
  private isSpinning = false;

  constructor(
    private service: UserService, 
    private memory: SubjectService,
    private validate: ValidationService
    ) { }

  ngOnInit() {
  }

  setMail(){
    this.mail.name = this.name;
    this.mail.email = this.email;
    this.mail.phone = this.phone;
    this.mail.subject = this.subject;
    this.mail.message = this.message;
    this.validMail = this.validate.validRequest(this.mail);
  }

  submit(){
    this.setMail();
    this.reset();
    if(this.validMail){
      this.isSpinning = true;
      this.service.sendEmail(this.validMail)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(()=>{
        this.success="Message Sent";
        this.isSpinning = false;
      });
    } 
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

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}
