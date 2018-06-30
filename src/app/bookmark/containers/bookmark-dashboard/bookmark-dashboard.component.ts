import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BookmarkService } from '../../bookmark.service';

import { Bookmark } from '../../models/bookmark.interface';

@Component({
  selector: 'bookmark-dashboard',
  templateUrl: './bookmark-dashboard.component.html'
})
export class BookmarkDashboardComponent implements OnInit {
  bookmarks: Observable<Bookmark[]> = this.bookmarkService.getBookmarks();

  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  handleVisit(event: Bookmark) {
    this.router.navigateByUrl(event.url);
  }

  goToAdd() {
    this.router.navigate(['bookmarks', 'add-new']);
  }

}
