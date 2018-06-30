import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { BookmarkService } from '../../bookmark.service';

import { Bookmark } from '../../models/bookmark.interface';

@Component({
  selector: 'bookmark-viewer',
  templateUrl: './bookmark-viewer.component.html'
})
export class BookmarkViewerComponent implements OnInit {
  bookmark: Observable<Bookmark> = this.bookmarkService.getBookmark(this.route.snapshot.params.id);
  errorDelete: boolean;
  errorSave: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService
  ) { }
  ngOnInit() {
  }
  onUpdateBookmark(event: Bookmark) {
    this.bookmarkService
      .updateBookmark(event)
      .subscribe(() => {
        return this.router.navigate(['/bookmarks']);
      }, () => {
        this.errorSave = true;
      });
  }

  onDeleteBookmark(event: number) {
    this.bookmarkService
      .removeBookmark(event)
      .subscribe(() => {
        this.router.navigate(['/bookmarks']);
      }, () => {
        this.errorDelete = true;
      });
  }

  goBack() {
    this.router.navigate(['/bookmarks']);
  }
}
