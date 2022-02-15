import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _openErrorModal$ = new Subject();
  public openErrorModal$ = this._openErrorModal$.asObservable();

  constructor() {}

  openErrorModal(reason?: string) {
    this._openErrorModal$.next(reason);
  }
}
