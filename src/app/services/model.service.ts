import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../interface/article';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _openErrorModal$ = new Subject();
  public openErrorModal$ = this._openErrorModal$.asObservable();
  private _openAddArticleModal$ = new Subject<Article>();
  public openAddArticleModal$ = this._openAddArticleModal$.asObservable();

  constructor() {}

  openErrorModal(reason?: string) {
    this._openErrorModal$.next(reason);
  }
  openAddOrUpdateArticleModal(reason: Article) {
    this._openAddArticleModal$.next(reason);
  }
}
