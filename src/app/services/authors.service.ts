import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { AuthorLinks } from '../contracts/page';
import { WordpressService } from './wordpress.service';
import { Author } from '../contracts/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private readonly _httpClient: HttpClient, private readonly _wordpressService: WordpressService) {}

  get(authorLinks: AuthorLinks[]): Observable<Author[]> {
    return this.getAuthors(authorLinks);
  }

  private getAuthors(authorsLinks: AuthorLinks[]): Observable<Author[]> {
    const requests = authorsLinks.map(author => this._httpClient.get<Author>(author.href));

    return forkJoin(requests);
  }
}
