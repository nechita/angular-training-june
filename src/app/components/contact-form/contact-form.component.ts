import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  @Output()
  contactMessage: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
      name: [''],
      message: ['']
    });
  }

  ngOnInit() {
  }

  handleSubmit() {
    if (!this.contactForm.valid) {
      return;
    }

    this.contactMessage.emit(this.contactForm.value);
  }

}
