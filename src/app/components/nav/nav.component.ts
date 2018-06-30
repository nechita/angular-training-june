import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="nav flex flex-row justify-center items-center bg-grey -mx-8">
    <a class="hover:bg-grey-dark no-underline text-white font-light py-2 px-8"
      *ngFor="let item of navigation"
      [title]="item.title"
      [routerLink]="item.link"
      routerLinkActive="bg-grey-darkest"
      [routerLinkActiveOptions]="{exact: item.exact}">
      {{item.name}}
    </a>
  </nav>
  `
})
export class NavComponent {

  navigation: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      title: 'Something'
    },
    {
      link: '/bookmarks',
      name: 'Bookmarks',
      exact: true,
      title: null
    },
    {
      link: '/bookmarks/favorites',
      name: 'Favorites',
      exact: true,
      title: null
    },
    {
      link: '/bookmarks/add-new',
      name: 'Quick add',
      exact: true,
      title: null
    }
  ];
  constructor() {}
}

interface Nav {
  link: string;
  name: string;
  exact: boolean;
  order?: number | 0;
  title: string | null;
}
