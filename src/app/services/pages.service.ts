import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordpressService } from './wordpress.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private readonly _httpClient: HttpClient, private readonly _wordpressService: WordpressService) {}

  get(baseUrl: string) {
    const url = this._wordpressService.getPagesApiUrl(baseUrl);

    return this._httpClient.get(url);
  }
}
