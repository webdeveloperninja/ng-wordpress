import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit {
  currentSlug$ = new BehaviorSubject('');

  content$ = this.currentSlug$.pipe(
    filter(slug => !!slug),
    withLatestFrom(this.route.params),
    mergeMap(([slug, params]: [any, any]) =>
      this._pagesService.get(params.wordpressUrl).pipe(
        map((pages: any[]) => {
          return of(this.findCurrentPage(pages, slug));
        })
      )
    )
  );

  constructor(private readonly _pagesService: PagesService, private readonly route: ActivatedRoute, private readonly _router: Router) {}

  ngOnInit() {
    this.setInitialPageSlug();

    this.route.params.subscribe(par => {
      this.setRouteSlug(par.slug);
    });
  }

  private findCurrentPage(pages: any[], currentSlug) {
    const activePage = pages.find(page => this.doesPageSlugMatch(page, currentSlug));

    if (!activePage) {
      return null;
    }

    return activePage.content.rendered;
  }

  private doesPageSlugMatch(page, slug): boolean {
    return page.slug.includes(slug);
  }

  private setRouteSlug(slug) {
    this.currentSlug$.next(slug);
  }

  private setInitialPageSlug() {
    const params = this.route.snapshot.params;
    this.setRouteSlug(params.slug);
  }
}
