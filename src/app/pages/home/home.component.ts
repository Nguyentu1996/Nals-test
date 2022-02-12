import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public articles$ = this.homeService.articles$;
  collectionSize$ = this.homeService.collectionSize$;
  pageNum = 1;

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.homeService.getArticles(this.pageNum);
  }

  onPageChange(currentPage: number){
    this.pageNum = currentPage;

    this.getArticles();
  }
}
