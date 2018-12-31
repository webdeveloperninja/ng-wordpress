import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PagesService } from 'projects/ng-wordpress/src/lib/services/pages.service';
import { AuthorsService } from 'projects/ng-wordpress/src/lib/services/authors.service';
import { Page } from 'projects/ng-wordpress/src/lib/contracts/page';
import { Author } from 'projects/ng-wordpress/src/lib/contracts/author';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent {
  pages$ = this._route.params.pipe(mergeMap(_ => this.getPages()));
  activePage$ = this.pages$.pipe(map(this.findActivePage.bind(this)));
  authors$ = this.activePage$.pipe(mergeMap(this.getAuthors.bind(this)));

  constructor(
    private readonly _pagesService: PagesService,
    private readonly _route: ActivatedRoute,
    private readonly _authorsService: AuthorsService
  ) {}

  private getPages(): Observable<Page[]> {
    return this._pagesService.get$();
  }

  private findActivePage(pages: Page[]): Page {
    const currentSlug = this._route.snapshot.params.slug;

    return pages.find(page => this.doesPageSlugMatch(page, currentSlug));
  }

  private getAuthors(page: Page): Observable<Author[]> {
    const authorLinks = page._links.author;

    return this._authorsService.get$(authorLinks);
  }

  private doesPageSlugMatch(page: Page, slug: string): boolean {
    return page.slug.includes(slug);
  }
}
