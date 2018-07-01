import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  emailField: AbstractControl;

  @Output()
  contactMessage: EventEmitter<ContactMessage> = new EventEmitter<ContactMessage>();

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
      name: [''],
      message: ['']
    });

    this.emailField = this.contactForm.controls['email'];
  }

  ngOnInit() {
  }

  handleSubmit() {
    if (!this.contactForm.valid) {
      return;
    }

    this.contactMessage.emit(this.contactForm.value);
  }

  resetForm() {
    this.contactForm.reset({});
  }

}

export interface ContactMessage {
  email: string;
  name: string;
  message: string;
}
