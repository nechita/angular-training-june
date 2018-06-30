import { Component, Input } from '@angular/core';
import { Bookmark } from '../../models/bookmark.interface';

@Component({
  selector: 'bookmark-count',
  template: `
    <span *ngIf="items?.length">
      Total bookmarks: {{ items?.length }}
    </span>
  `
})
export class BookmarkCountComponent {
  @Input()
  items: Bookmark[];
  constructor() {}
}
