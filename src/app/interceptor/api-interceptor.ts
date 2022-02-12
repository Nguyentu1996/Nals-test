import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { SpinnerOverlayService } from '../components/spinner/spinner-overlay-sevice';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private spinnerOverlayService: SpinnerOverlayService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerOverlayService.show();

    return next.handle(req).pipe(
      map((resp: HttpEvent<any>) => {
        // this.isShow = false;
        if (resp instanceof HttpResponse) {
          if (resp.status === 404 || resp.status === 500) {
            // this.showPopup('Errors', 'Please contact admin', 'normal');
            return resp;
          }
        }
        return resp;
      }),
      catchError((error: HttpErrorResponse) => {
        // this.showPopup('Errors', 'Please contact admin', 'normal');
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }),
      finalize(() => {
        this.spinnerOverlayService.hide();
        // request completes, errors, or is cancelled
      })
    );
  }
}
