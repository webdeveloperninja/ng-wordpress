import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Page } from 'src/app/contracts/page';
import { AuthorsService } from 'src/app/services/authors.service';
import { PagesService } from 'src/app/services/pages.service';
import { Author } from 'src/app/contracts/author';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent {
  pages$ = this.route.params.pipe(mergeMap(_ => this.getPages()));
  activePage$ = this.pages$.pipe(map(this.findActivePage.bind(this)));
  authors$ = this.activePage$.pipe(mergeMap(this.getAuthors.bind(this)));

  constructor(
    private readonly _pagesService: PagesService,
    private readonly route: ActivatedRoute,
    private readonly _authorsService: AuthorsService
  ) {}

  private getPages(): Observable<Page[]> {
    const wordpressUrl = this.route.snapshot.params.wordpressUrl;

    return this._pagesService.get(wordpressUrl);
  }

  private findActivePage(pages: Page[]): Page {
    const currentSlug = this.route.snapshot.params.slug;

    return pages.find(page => this.doesPageSlugMatch(page, currentSlug));
  }

  private getAuthors(page: Page): Observable<Author[]> {
    const authorLinks = page._links.author;

    return this._authorsService.get(authorLinks);
  }

  private doesPageSlugMatch(page: Page, slug: string): boolean {
    return page.slug.includes(slug);
  }
}
