// tslint:disable no-any function-name
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CoreModule} from '@lib/core';

export const components: any[] = [];

export const directives: any[] = [];

export const entryComponents: any[] = [];

export const modules: any[] = [
  CoreModule
];

export const providers: any[] = [];

@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  entryComponents: [
    ...entryComponents
  ],
  exports: [
    ...modules,
    ...directives,
    ...components
  ],
  imports: [
    ...modules
  ]
})
export class SharedModule {
  public static forRoot (): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...providers
      ]
    };
  }
}
