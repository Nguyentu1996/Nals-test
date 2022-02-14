import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Article } from 'src/app/interface/article';
import { ModalService } from 'src/app/services/model.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles$!: Observable<Article[]>;
  collectionSize$!: Observable<number>;
  pageNum = 1;


  constructor(
    private blogService: BlogService,
    private modalService: ModalService,
    private toastService: ToastService

    ) { }

  ngOnInit(): void {
    this.articles$ = this.blogService.articles$;
    this.collectionSize$ = this.blogService.collectionSize$;
    this.getArticles();
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

  openArticleModal(id: string) {
    if(id) {
      this.blogService.getArticleById(id).subscribe(
        response => {
          this.modalService.openAddOrUpdateArticleModal(response);
        }
      )
    } else {
      const article: Article = {
        id: '',
        content: '',
        image: '',
        createdAt: '',
        title: ''
      }
      this.modalService.openAddOrUpdateArticleModal(article);
    }
   
  }
  addArticle(article: Article){
    this.blogService.addArticle(article).subscribe(response => {
      if(response) {
        this.toastService.show('success', {
          classname: 'bg-success text-light',
          delay: 10000
        }); 
        this.getArticles();
      }
    })
  }
  updateArticle(article: Article) {
    this.blogService.updateArticle(article).subscribe(response => {
      if(response) {
        this.toastService.show('success', {
          classname: 'bg-success text-light',
          delay: 10000
        });
        this.getArticles();
      }
    })
  }

}
