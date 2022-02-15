import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Article, ArticleResponse } from 'src/app/interface/article';
import { ModalService } from 'src/app/services/model.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public articles!: ArticleResponse;
  pageNum = 1;

  constructor(
    private blogService: BlogService,
    private modalService: ModalService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.blogService.getArticles(this.pageNum).subscribe((response) => {
      if (response) {
        this.articles = response;
      }
    });
  }

  onPageChange(currentPage: number) {
    this.pageNum = currentPage;
    this.getArticles();
  }

  onSearch(keyword: string) {
    this.blogService.searchArticles(keyword, this.pageNum);
  }

  onSort(sortType: string) {
    this.blogService.sortArticles(sortType);
  }

  openArticleModal(id: string) {
    if (id) {
      this.blogService.getArticleById(id).subscribe((response) => {
        this.modalService.openAddOrUpdateArticleModal(response);
      });
    } else {
      const article: Article = {
        id: 0,
        content: '',
        image: {
          url: ''
        },
        title: ''
      };
      this.modalService.openAddOrUpdateArticleModal(article);
    }
  }
  addArticle(article: Article) {
    this.blogService.addArticle(article).subscribe((response) => {
      if (response) {
        this.toastService.show('success', {
          classname: 'bg-success text-light',
          delay: 10000
        });
        this.getArticles();
      }
    });
  }
  updateArticle(article: Article) {
    this.blogService.updateArticle(article).subscribe((response) => {
      if (response) {
        this.toastService.show('success', {
          classname: 'bg-success text-light',
          delay: 10000
        });
        this.getArticles();
      }
    });
  }
}
