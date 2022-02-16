import { Component, Input, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { ArticleResponse } from 'src/app/interface/article';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
  private openArticleSubject = new Subject<string>();
  private clickDebounce = 300;

  @Input()
  articles!: ArticleResponse;
  @Output() openArticleModal = this.openArticleSubject.pipe(
    debounceTime(this.clickDebounce)
  );

  constructor() {}
  onEdit(id) {
    this.openArticleSubject.next(id);
  }
}
