import { inject, Injectable } from '@angular/core';

import { Post } from '../../core';
import { delay, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {

  #api = 'https://jsonplaceholder.typicode.com/posts';
  #httpClient = inject(HttpClient);

  constructor() { 
    console.log('PostService created');
  }

  getPosts(page: number = 10): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('_limit', '10');
    params = params.append('_page', page);
    return this.#httpClient.get<Post[]>(`${this.#api }`, { params: params });
  }

  getPost(id: number): Observable<Post> {
    return this.#httpClient.get<Post>(`${this.#api }/${id}`).pipe(delay(5000));
  }
}
