import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppComponent } from './containers/app/app.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'bookmarks', loadChildren: './bookmark/bookmark.module#BookmarkModule' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(ROUTES),
        FormsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
