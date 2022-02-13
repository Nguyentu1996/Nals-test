import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interface/article';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  articles$!: Observable<Article[]>;
  collectionSize$!: Observable<number>;
  pageNum = 1;


  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.getArticles();
    this.articles$ = this.blogService.articles$;
    this.collectionSize$ = this.blogService.collectionSize$;
  }

  getArticles(){
    this.blogService.getArticles(this.pageNum);
  }

  onPageChange(currentPage: number){
    this.pageNum = currentPage;
    this.getArticles();
  }
  onSearch(keyword: string) {
    this.blogService.searchArticles(keyword, this.pageNum);
  }
  onSort(sortType: string) {
    this.blogService.sortArticles(sortType);
  }
}
