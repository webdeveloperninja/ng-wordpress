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
export class AngularWordpressModule {
  static forRoot(config: WordpressConfig): ModuleWithProviders {
    return {
      ngModule: AngularWordpressModule,
      providers: [{ provide: WordpressConfig, useValue: config }]
    };
  }
}
