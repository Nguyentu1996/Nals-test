import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, take } from 'rxjs';
import { AddUpdateArticleModalComponent } from 'src/app/components/add-update-article-modal/add-update-article-modal.component';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Article, ArticleResponse } from 'src/app/interface/article';
import { AddArticleReq } from 'src/app/request/add-article';
import { UpdateArticleReq } from 'src/app/request/update-article';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public articles!: ArticleResponse;
  public article!: Article;
  pageNum = 1;

  constructor(
    private blogService: BlogService,
    private toastService: ToastService,
    private ngbModal: NgbModal
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
    this.pageNum = 1;
    this.blogService
      .searchArticles(keyword, this.pageNum)
      .subscribe((response) => {
        if (response) {
          this.articles = response;
        }
      });
  }

  onSort(sortType: string) {
    this.blogService.sortArticles(sortType);
  }

  openArticleModal(id: string) {
    if (id) {
      this.blogService
        .getArticleById(id)
        .pipe(take(1))
        .subscribe((response) => {
          const modalRef = this.ngbModal.open(AddUpdateArticleModalComponent);
          modalRef.componentInstance.article = response;
          modalRef.componentInstance.lbTitle = 'Update Artitle';
          modalRef.componentInstance.btnTitle = 'Update';
          modalRef.result.then(
            (res) => {
              this.updateArticle(res);
            },
            (reason) => {}
          );
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
      const modalRef = this.ngbModal.open(AddUpdateArticleModalComponent);
      modalRef.componentInstance.article = article;
      modalRef.result.then(
        (res: AddArticleReq) => {
          this.addArticle(res);
        },
        (reason) => {}
      );
    }
  }

  addArticle(article: AddArticleReq) {
    this.blogService
      .addArticle(article)
      .pipe(switchMap((_) => this.blogService.getArticles(this.pageNum)))
      .subscribe((response) => {
        if (response) {
          this.articles = response;
          this.toastService.show('Added success', {
            classname: 'bg-success text-light',
            delay: 10000
          });
        }
      });
  }
  updateArticle(article: UpdateArticleReq) {
    this.blogService
      .updateArticle(article)
      .pipe(switchMap((_) => this.blogService.getArticles(this.pageNum)))
      .subscribe((response) => {
        if (response) {
          this.articles = response;
          this.toastService.show('Updated success', {
            classname: 'bg-success text-light',
            delay: 10000
          });
        }
      });
  }
}
