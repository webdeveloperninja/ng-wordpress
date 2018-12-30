import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { PagesService } from 'src/app/services/pages.service';
import { Page } from 'src/app/contracts/page';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit {
  currentSlug$ = new BehaviorSubject('');

  content$ = this.currentSlug$.pipe(
    filter(currentSlug => !!currentSlug),
    withLatestFrom(this.route.params),
    mergeMap(([slug, params]: [string, Params]) =>
      this._pagesService.get(params.wordpressUrl).pipe(
        map(pages => {
          return of(this.getContent(pages, slug));
        })
      )
    )
  );

  constructor(private readonly _pagesService: PagesService, private readonly route: ActivatedRoute, private readonly _router: Router) {}

  ngOnInit() {
    this.setInitialPageSlug();

    this.route.params.subscribe(params => {
      this.setRouteSlug(params.slug);
    });
  }

  private getContent(pages: Page[], currentSlug: string): string {
    const activePage = pages.find(page => this.doesPageSlugMatch(page, currentSlug));

    if (!activePage) {
      return null;
    }

    return activePage.content.rendered;
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
