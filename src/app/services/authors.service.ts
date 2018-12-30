import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { Author } from '../contracts/page';
import { WordpressService } from './wordpress.service';
import { PostAuthor } from '../contracts/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private readonly _httpClient: HttpClient, private readonly _wordpressService: WordpressService) {}

  get(authorLinks: Author[]): Observable<PostAuthor[]> {
    return this.getAuthors(authorLinks);
  }

  private getAuthors(authorsLinks: Author[]): Observable<PostAuthor[]> {
    const requests = authorsLinks.map(author => this._httpClient.get<PostAuthor>(author.href));

    return forkJoin(requests);
  }
}
