import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, switchMap } from 'rxjs';
import { Article } from 'src/app/interface/article';
import { environment } from 'src/environments/environment';

@Injectable()
export class HomeService {
  articles: Article[] = [];
  collectionSize: number = 0;

  private articleSubject = new BehaviorSubject(this.articles);
  private collectionSizeSubject = new BehaviorSubject(this.collectionSize);

  public collectionSize$: Observable<number> = this.collectionSizeSubject.asObservable();
  public articles$: Observable<Article[]> = this.articleSubject.asObservable();

  constructor(private http: HttpClient) { }
  getArticles(page: number) {
    forkJoin([this.getArticlesSize(), this.getArticlesByPage(page)],
    (collection, articles) => {  
      return {
        collectionSize: collection.length,
        articles: articles
      }
    }).subscribe(
      response => {
        if(response.collectionSize  && response.articles) {
          this.articleSubject.next(response.articles);
          this.collectionSizeSubject.next(response.collectionSize);
        }
      }
    )
    
  }
  getArticlesByPage(page: number) {
    return this.http.get<Article[]>(environment.apiUrl + `blogs?orderBy=createdA&page=${page}&limit=10`);
  }

  getArticlesSize() {
    return this.http.get<Article[]>(environment.apiUrl + 'blogs?sortBy=createdAt&order=asc');
  }
}
