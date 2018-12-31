import { NgModule, InjectionToken, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable()
export class WordpressConfig {
  baseUrl: string;
}

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class NgWordpressModule {
  static forRoot(config: WordpressConfig): ModuleWithProviders {
    return {
      ngModule: NgWordpressModule,
      providers: [{ provide: WordpressConfig, useValue: config }]
    };
  }
}
