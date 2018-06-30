import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Bookmark } from '../../models/bookmark.interface';
import { BookmarkService } from '../../bookmark.service';

@Component({
  selector: 'bookmark-favorites',
  template: `
  <div class="bookmark-manager">
    <h2>Favorites</h2>
    <bookmark-detail
      *ngFor="let bookmark of (favorites|async);"
      [detail]="bookmark"
      (edit)="handleEdit($event)"
      (removeFromFavorites)="handleRemoveFromFavorites($event)"
      (visit)="handleVisit($event)">
    </bookmark-detail>
    <p *ngIf="!(favorites|async)?.length">
      Don't forget to favorite the ones you like.
    </p>
  </div>
  `
})
export class BookmarkFavoritesComponent {
  favorites: Observable<Bookmark[]> = this.bookmarkService.getFavorites();
  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) { }

  handleRemoveFromFavorites(event: Bookmark) {
    this.bookmarkService
      .updateBookmark(event)
      .subscribe((data: Bookmark) => {
        this.favorites = this.favorites.pipe(
          filter((favorite: any) => {
            if (favorite.id !== event.id) {
              favorite = Object.assign({}, favorite, event);
            }
            return favorite;
          })
        );
      });
  }

  handleEdit(event: Bookmark) {
    this.bookmarkService
      .updateBookmark(event)
      .subscribe((data: Bookmark) => {
        this.favorites = this.favorites.pipe(
          map((bookmark: Bookmark) => {
            if (bookmark.id === event.id) {
              bookmark = Object.assign({}, bookmark, event);
            }
            return bookmark;
          })
        );
      });
  }

  handleVisit(event: Bookmark) {
    this.router.navigateByUrl(event.url);
  }
}

