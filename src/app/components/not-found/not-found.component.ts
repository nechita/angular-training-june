import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      Not found? Go <a routerLink='/home'>home</a>.
    </div>
  `
})
export class NotFoundComponent {
  constructor() {}
}
