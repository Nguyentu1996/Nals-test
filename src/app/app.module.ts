import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainModule } from './layouts/main/main.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api-interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MediaListComponent } from './components/media-list/media-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    MainModule,
    OverlayModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  entryComponents: [SpinnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
