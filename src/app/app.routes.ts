import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'About',
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
        title: 'Blog',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then((m) => m.ContactComponent),
        title: 'Contact',
      },
      {
        path: 'videos',
        loadComponent: () => import('./pages/videos/videos.component').then((m) => m.VideosComponent),
        title: 'Videos',
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
        title: 'Gallery',
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.component').then((m) => m.SearchComponent),
        title: 'Search',
      },
      {
        path: 'article',
        loadComponent: () =>
          import('./pages/article/article.component').then((m) => m.ArticleComponent),
        title: 'Article',
      },
      {
        path: 'category',
        redirectTo: 'category/world',
        pathMatch: 'full',
      },
      {
        path: 'category/:slug',
        loadComponent: () =>
          import('./pages/category/category.component').then((m) => m.CategoryComponent),
        title: 'Category',
      },
      {
        path: 'subcategory',
        loadComponent: () =>
          import('./pages/subcategory/subcategory.component').then((m) => m.SubcategoryComponent),
        title: 'Subcategory',
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
        title: 'Page not found',
      },
    ],
  },
];
