import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageContentComponent } from './containers/page-content/page-content.component';
import { PostsComponent } from './containers/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PageContentComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: ':slug',
    component: PageContentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
