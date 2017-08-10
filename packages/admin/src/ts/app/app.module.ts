import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from '@lib/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {SharedModule} from '../shared';
import {AppComponent} from './app.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    NgbModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    SharedModule.forRoot()
  ]
})
export class AppModule {}
