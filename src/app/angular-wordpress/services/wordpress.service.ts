import { Injectable } from '@angular/core';
import { WordpressConfig } from '../angular-wordpress.module';

export const baseUrl = 'http://localhost:8080/test/WordPress/';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  getPostsApiUrl(): string {
    return `${this.config.baseUrl}/wp-json/wp/v2/posts`;
  }

  getPagesApiUrl(): string {
    return `${this.config.baseUrl}/wp-json/wp/v2/pages`;
  }

  constructor(private readonly config: WordpressConfig) {}
}
