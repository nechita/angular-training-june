import { Component, OnInit } from '@angular/core';
import { ContactMessage } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit() {
  }

  onContactFormSubmit(event: ContactMessage) {
    console.log(event);
    // to call a service
  }

}
