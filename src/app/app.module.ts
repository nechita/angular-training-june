import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // only import in AppModule
import { RouterModule, Routes } from '@angular/router';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bookmarks', loadChildren: './bookmark/bookmark.module#BookmarkModule' }, // lazy loading
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } // 404 not found
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
1. import decorator
2. use decorator
3. import modules
4. add modules to imports
5. import components
6. add components to declarations
7. if AppModule declare bootstrap component
*/

