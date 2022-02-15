import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticleResponse } from 'src/app/interface/article';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
  @Input()
  articles!: ArticleResponse;
  @Output() openArticleModal = new EventEmitter();
  constructor() {}
  onEdit(id: number) {
    this.openArticleModal.emit(id);
  }
}
