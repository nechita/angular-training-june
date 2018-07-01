import { Component, OnInit } from '@angular/core';

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

  onContactFormSubmit(event: any) {
    console.log(event);
    // to call a service
  }

}
