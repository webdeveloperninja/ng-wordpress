import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  private wordpressUrl$ = new BehaviorSubject('');
  public readonly url$ = this.wordpressUrl$.asObservable();

  constructor(private readonly router: Router) {}

  updateSite(url: string): void {
    this.router.navigate(['site', url]);
  }

  getPostsApiUrl(baseUrl: string): string {
    return `${baseUrl}/wp-json/wp/v2/posts`;
  }

  getPagesApiUrl(baseUrl: string): string {
    return `${baseUrl}/wp-json/wp/v2/pages`;
  }
}
