import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Bookmark } from '../../models/bookmark.interface';

@Component({
  selector: 'bookmark-detail',
  templateUrl: './bookmark-detail.component.html'
})
export class BookmarkDetailComponent implements OnChanges {
  @Input()
  detail: Bookmark;

  @Output()
  edit: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  @Output()
  removeFromFavorites: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  @Output()
  remove: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  editing = false;

  constructor() { }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onTitleChange(value: string) {
    this.detail.title = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemoveFromFavorites() {
    this.detail.favorite = false;
    this.removeFromFavorites.emit(this.detail);
  }

}
