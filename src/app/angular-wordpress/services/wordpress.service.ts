import { Injectable } from '@angular/core';

export const baseUrl = 'http://localhost:8080/test/WordPress/';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  getPostsApiUrl(): string {
    return `${baseUrl}/wp-json/wp/v2/posts`;
  }

  getPagesApiUrl(): string {
    return `${baseUrl}/wp-json/wp/v2/pages`;
  }
}
