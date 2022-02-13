import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ApiInterceptor } from './interceptor/api-interceptor';
import { MainModule } from './layouts/main/main.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { AddUpdateArticleModalComponent } from './components/add-update-article-modal/add-update-article-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DialogErrorComponent,
    CkeditorComponent,
    AddUpdateArticleModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    MainModule,
    OverlayModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  entryComponents: [SpinnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
