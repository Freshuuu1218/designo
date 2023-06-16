import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  showNameError: boolean = false;
  showEmailError: boolean = false;
  showEmailValidError: boolean = false;
  showPhoneError: boolean = false;
  showMessageError: boolean = false;
  onSubmit(form: NgForm) {
    this.showNameError = false;
    this.showEmailError = false;
    this.showEmailValidError = false;
    this.showPhoneError = false;
    this.showMessageError = false;
    if (form.valid) {
      alert('Message sent successfully');
      form.reset();
    } else {
      if (form.controls['name'].status === 'INVALID') {
        this.showNameError = true;
      }

      if (form.controls['email'].status === 'INVALID') {
        if (form.controls['email'].errors?.['required']) {
          this.showEmailError = true;
        }
        if (form.controls['email'].errors?.['email']) {
          this.showEmailValidError = true;
        }
      }

      if (form.controls['phone'].status === 'INVALID') {
        this.showPhoneError = true;
      }

      if (form.controls['message'].status === 'INVALID') {
        this.showMessageError = true;
      }

      alert('Something went wrong');
    }
  }
}
