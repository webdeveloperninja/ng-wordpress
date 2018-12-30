import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordpressService } from './wordpress.service';
import { Observable } from 'rxjs';
import { Post } from '../contracts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private readonly _httpClient: HttpClient, private readonly _wordpressService: WordpressService) {}

  get(baseUrl: string): Observable<Post[]> {
    const url = this._wordpressService.getPostsApiUrl(baseUrl);

    return this._httpClient.get<Post[]>(url);
  }
}
