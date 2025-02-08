import { Routes } from "@angular/router";

export const POSTS_ROUTES: Routes = [
    {
        path: '',
        title: 'Liste des posts',
        loadComponent: () => import('./lists/post-list.component').then(m => m.PostListComponent)
    },
    {
        path: ':id/details',
        title: 'Détails du post',
        //resolve: { post: 'post' },
        loadComponent: () => import('./details/post-details.component').then(m => m.PostDetailsComponent)
    }
]
