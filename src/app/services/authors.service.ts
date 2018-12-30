import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { Author } from '../contracts/page';
import { WordpressService } from './wordpress.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private readonly _httpClient: HttpClient, private readonly _wordpressService: WordpressService) {}

  get(authorLinks: Author[]) {
    return this.getAuthors(authorLinks);
  }

  private getAuthors(authorsLinks: Author[]): Observable<any[]> {
    const requests = authorsLinks.map(author => this._httpClient.get(author.href));

    return forkJoin(requests);
  }
}
