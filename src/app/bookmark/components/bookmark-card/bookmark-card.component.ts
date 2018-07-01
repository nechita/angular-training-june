import { Component, Input } from '@angular/core';
import { Bookmark } from '../../models/bookmark.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'bookmark-card',
  styleUrls: ['bookmark-card.component.scss'],
  templateUrl: './bookmark-card.component.html'
})
export class BookmarkCardComponent {
  @Input()
  card: Bookmark;
  @Input()
  even: boolean;

  constructor(
    private router: Router
  ) { }

  goToLink() {
    this.router.navigate(['bookmarks', 'view', this.card.id]);
  }

}
