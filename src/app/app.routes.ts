import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Accueil',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'posts',
        title: 'Posts',
        loadComponent: () => import('./pages/posts/posts.component').then(m => m.PostsComponent)
    },
    {
        path: 'login',
        title: 'Connexion',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: "**",
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }   
];
