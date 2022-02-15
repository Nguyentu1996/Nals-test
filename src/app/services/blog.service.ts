import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable, of } from 'rxjs';
import { Article, ArticleResponse } from 'src/app/interface/article';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) {}

  getArticles(page: number) {
    return this.http.get<ArticleResponse>(
      environment.apiUrl + `blogs?orderBy=createdAt&page=${page}&items=10`
    );
  }

  searchArticles(keyword: string, pageNum: number) {
    this.http.get<ArticleResponse>(
      environment.apiUrl + `blogs?search=${keyword}&page=1&items=10`
    );
  }
  sortArticles(sortType: string) {
    this.http.get<Article[]>(
      environment.apiUrl + `blogs?sortby=createdAt&order=desc&page=1&items=10`
    );
  }
  getArticleById(id: string) {
    return this.http.get<Article>(environment.apiUrl + `blogs/${id}`);
  }
  addArticle(article: Article) {
    return this.http.post<Article>(environment.apiUrl + 'blogs', article);
  }
  updateArticle(article: Article) {
    return this.http.post<Article>(environment.apiUrl + 'blogs', article);
  }

  private getArticlesByPage(page: number) {
    return this.http.get<ArticleResponse>(
      environment.apiUrl + `blogs?orderBy=createdA&page=${page}&items=10`
    );
  }
}
