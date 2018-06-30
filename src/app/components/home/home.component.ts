import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="mt-8">
      <p>This is our fantastic bookmarking app</p>
      <p>On this app, you can achieve the following:</p>
      <ul>
        <li>Add/Update/Delete Bookmarks</li>
        <li>Save a list of your favorite bookmarks</li>
      </ul>
    </div>
  `
})
export class HomeComponent { }
