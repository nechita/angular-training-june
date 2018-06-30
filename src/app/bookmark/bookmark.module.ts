import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { BookmarkDashboardComponent } from './containers/bookmark-dashboard/bookmark-dashboard.component';
import { BookmarkViewerComponent } from './containers/bookmark-viewer/bookmark-viewer.component';
import { BookmarkAddComponent } from './containers/bookmark-add/bookmark-add.component';
import { BookmarkFavoritesComponent } from './containers/bookmark-favorites/bookmark-favorites.component';

// components
import { BookmarkCountComponent } from './components/bookmark-count/bookmark-count.component';
import { BookmarkDetailComponent } from './components/bookmark-detail/bookmark-detail.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';

// services
import { BookmarkService } from './bookmark.service';

// directives
import { IsUrlValidator } from './containers/bookmark-add/is-url.directive';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BookmarkDashboardComponent },
      { path: 'view/:id', component: BookmarkViewerComponent },
      { path: 'add-new', component: BookmarkAddComponent },
      { path: 'favorites', component: BookmarkFavoritesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    BookmarkDashboardComponent,
    BookmarkViewerComponent,
    BookmarkAddComponent,
    BookmarkFavoritesComponent,
    BookmarkCountComponent,
    BookmarkDetailComponent,
    BookmarkCardComponent,
    BookmarkFormComponent,
    IsUrlValidator
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [
    BookmarkService
  ]
})
export class BookmarkModule { }
