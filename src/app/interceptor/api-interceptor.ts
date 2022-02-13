import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { SpinnerOverlayService } from '../components/spinner/spinner-overlay-sevice';
import { ModalService } from '../services/model.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private spinnerOverlayService: SpinnerOverlayService,
    private modalService: ModalService
    ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req.clone({
      headers: req.headers.set('Content-Type', 'application/json '),
  });
    this.spinnerOverlayService.show();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.modalService.openErrorModal();
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }),
      finalize(() => {
        this.spinnerOverlayService.hide();
        // request completes, errors, or is cancelled
      })
    );
  }
}

