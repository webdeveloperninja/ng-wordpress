import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Page } from 'src/app/contracts/page';
import { AuthorsService } from 'src/app/services/authors.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit {
  currentSlug$ = new BehaviorSubject('');

  activePage$ = this.currentSlug$.pipe(
    filter(currentSlug => !!currentSlug),
    withLatestFrom(this.route.params),
    mergeMap(([slug, params]: [string, Params]) =>
      this._pagesService.get(params.wordpressUrl).pipe(
        map(pages => {
          return this.getActivePage(pages, slug);
        })
      )
    )
  );

  authors$ = this.activePage$.pipe(
    switchMap(page => {
      const authorLinks = page._links.author;

      return this._authorsService.get(authorLinks);
    })
  );

  constructor(
    private readonly _pagesService: PagesService,
    private readonly route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _authorsService: AuthorsService
  ) {}

  ngOnInit() {
    this.setInitialPageSlug();

    this.route.params.subscribe(params => {
      this.setRouteSlug(params.slug);
    });
  }

  private getActivePage(pages: Page[], currentSlug: string): Page {
    const activePage = pages.find(page => this.doesPageSlugMatch(page, currentSlug));

    if (!activePage) {
      return null;
    }

    return activePage;
  }

  private doesPageSlugMatch(page: Page, slug: string): boolean {
    return page.slug.includes(slug);
  }

  private setRouteSlug(slug: string): void {
    this.currentSlug$.next(slug);
  }

  private setInitialPageSlug(): void {
    const params = this.route.snapshot.params;

    this.setRouteSlug(params.slug);
  }
}
