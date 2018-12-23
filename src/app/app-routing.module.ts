import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageContentComponent } from './containers/page-content/page-content.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
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
