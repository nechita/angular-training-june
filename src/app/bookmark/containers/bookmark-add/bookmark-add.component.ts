import { Component } from '@angular/core';
import { Bookmark } from '../../models/bookmark.interface';

import { BookmarkService } from '../../bookmark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bookmark-add',
  templateUrl: './bookmark-add.component.html'
})
export class BookmarkAddComponent {
  bookmarkSaved = false;
  detail: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) { }

  handleSubmit(bookmark: Bookmark, isValid: boolean) {
    bookmark.favorite = false;
    bookmark.description = '';
    this.bookmarkService
      .addBookmark(bookmark)
      .subscribe((data) => {
        this.bookmarkSaved = true;
        setTimeout(() => {
          this.router.navigate(['/bookmarks']);
        }, 3000);
      });
  }

}
