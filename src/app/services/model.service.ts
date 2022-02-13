import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _openErrorModal$ = new Subject();
  public openErrorModal$ = this._openErrorModal$.asObservable();
  private _openAddArticleModal$ = new Subject();
  public openAddArticleModal$ = this._openAddArticleModal$.asObservable();

  constructor() { }

  openErrorModal(reason?: string) {
    this._openErrorModal$.next(reason);
  }
  openAddOrUpdateArticleModal(reason?: string) {
    this._openAddArticleModal$.next(reason);
  }
}
