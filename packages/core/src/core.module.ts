// tslint:disable no-any function-name
import {CommonModule} from '@angular/common';
import {LOCALE_ID, ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {GreetingComponent} from './greeting';

// TODO: Move into own file
export function authFactory (http: Http, options: RequestOptions): AuthHttp {
  return new AuthHttp(
    new AuthConfig({
      noTokenScheme: true,
      tokenName: 'id_token' // TODO: Use env variable
    }),
    http,
    options
  );
}

export const components: any[] = [
  GreetingComponent
];

export const directives: any[] = [];

export const entryComponents: any[] = [];

export const modules: any[] = [
  CommonModule,
  HttpModule,
  NgbModule,
  NgIdleKeepaliveModule,
  ReactiveFormsModule,
  RouterModule
];

export const providers: any[] = [
  {
    provide: LOCALE_ID,
    useValue: 'en-GB'
  },
  {
    deps: [
      Http,
      RequestOptions
    ],
    provide: AuthHttp,
    useFactory: authFactory
  }
];

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
export class CoreModule {
  public static forRoot (): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...providers
      ]
    };
  }
}
