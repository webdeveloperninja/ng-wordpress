import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordpressService, baseUrl } from './wordpress.service';
import { Observable } from 'rxjs';
import { Page } from '../contracts/page';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private readonly _httpClient: HttpClient, private readonly _wordpressService: WordpressService) {}

  get$(): Observable<Page[]> {
    const url = this._wordpressService.getPagesApiUrl();

    return this._httpClient.get<Page[]>(url);
  }
}
