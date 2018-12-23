import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ActivatedRoute } from '@angular/router';
import { withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit {
  params$ = this._activatedRoute.params;

  content$ = this._pagesService.get().pipe(
    withLatestFrom(this.params$),
    map(([pages, params]: [any[], any]) => {
      return pages.filter(page => page.slug.includes('dfsfdfsd'))[0].content.rendered;
    })
  );

  constructor(private readonly _pagesService: PagesService, private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
