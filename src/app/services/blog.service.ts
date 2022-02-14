import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable, of } from 'rxjs';
import { Article } from 'src/app/interface/article';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})
export class BlogService {
  articles: Article[] = [];
  collectionSize: number = 0;

  private _articles$ = new BehaviorSubject(this.articles);
  private _collection$ = new BehaviorSubject(this.collectionSize);

  public collectionSize$: Observable<number> = this._collection$.asObservable();
  public articles$: Observable<Article[]> = this._articles$.asObservable();

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
        if(response.collectionSize && response.articles) {
          this._articles$.next(response.articles)
          this._collection$.next(response.collectionSize)
        }
      }
    )
  }

  searchArticles(keyword: string, pageNum: number){
    this.http.get<Article[]>(environment.apiUrl + `blogs?search=${keyword}&page=1&limit=10`)
    .subscribe(response => 
      {
        if(response) { 
          this._articles$.next(response)
        }
    });
  }
  sortArticles(sortType: string){
    this.http.get<Article[]>(environment.apiUrl + `blogs?sortby=createdAt&order=desc&page=1&limit=10`)
    .subscribe(response => 
      {
        if(response) { 
          this._articles$.next(response)
        }
    });
  }
  getArticleById(id: string) {
    return this.http.get<Article>(environment.apiUrl + `blogs/${id}`)
  }
  addArticle(article: Article) {
    return this.http.post<Article>(environment.apiUrl + 'blogs', article)
  }
  updateArticle(article: Article) {
    return this.http.post<Article>(environment.apiUrl + 'blogs', article)
  }

  private getArticlesByPage(page: number) {
    return this.http.get<Article[]>(environment.apiUrl + `blogs?orderBy=createdA&page=${page}&limit=10`)
  }

  private getArticlesSize() {
    return this.http.get<Article[]>(environment.apiUrl + 'blogs?sortBy=createdAt&order=asc')
  }
  validateImage(url: string): Observable<boolean> {
  
    let isValid = this.http.get(url).pipe(map(value => {
      if(value) {
        debugger
      }
    }))
    return of(false);
  }
}
