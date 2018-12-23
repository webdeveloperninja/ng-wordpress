import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent {
  content$ = this.route.params.pipe(
    withLatestFrom(this._pagesService.get()),
    map(([params, pages]: [any, any[]]) => {
      return of(pages.filter(page => page.slug.includes(params.slug))[0].content.rendered);
    })
  );

  constructor(private readonly _pagesService: PagesService, private readonly route: ActivatedRoute, private readonly _router: Router) {}
}
