import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { PostsComponent } from './containers/posts/posts.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { PageContentComponent } from './containers/page-content/page-content.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, NavigationComponent, PageContentComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FlexLayoutModule, ThemeModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
