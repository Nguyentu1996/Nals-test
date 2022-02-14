import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interface/article';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
  @Input()
  articles$!: Observable<Article[]>;
  @Output() openArticleModal = new EventEmitter();
  constructor() { }
  onEdit(id: string){
    this.openArticleModal.emit(id);
  }

}
