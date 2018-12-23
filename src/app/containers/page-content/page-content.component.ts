import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { withLatestFrom, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'wp-page-content',
  templateUrl: './page-content.component.html'
})
export class PageContentComponent implements OnInit {
  params$ = this.route.params;

  content$ = this.route.params.pipe(
    withLatestFrom(this._pagesService.get()),
    map(([params, pages]: [any, any[]]) => {
      console.log('test', params);
      return of(pages.filter(page => page.slug.includes(params.slug))[0].content.rendered);
      // return pages.filter(page => page.slug.includes(params.slug))[0].content.rendered;
    })
  );

  constructor(private readonly _pagesService: PagesService, private readonly route: ActivatedRoute, private readonly _router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
}
