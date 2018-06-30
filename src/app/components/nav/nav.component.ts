import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  navigation: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      title: 'Home Link'
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
    },
    {
      link: '/contact',
      name: 'Contact',
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
