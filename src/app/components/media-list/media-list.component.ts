import { Component, Input } from '@angular/core';
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

  constructor() { }

  errorHandler(event: any) {
    event.target.src = "../../../assets/lady.jpg";
  }

}
