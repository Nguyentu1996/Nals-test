import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { Article } from 'src/app/interface/article';
import { BlogService } from 'src/app/services/blog.service';
import { ModalService } from 'src/app/services/model.service';

@Component({
  selector: 'app-add-update-article-modal',
  templateUrl: './add-update-article-modal.component.html',
  styleUrls: ['./add-update-article-modal.component.css']
})
export class AddUpdateArticleModalComponent implements OnInit {
  @Output() addArticle = new EventEmitter<Article>();
  @Output() updateArticle = new EventEmitter<Article>();
  @ViewChild('contentModal')
  elementRef!: ElementRef;
  btnTitle: string = "Add";
  lbTitle: string = "Add Article";
  formGroup = new FormGroup({
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100)
    ]),
    id: new FormControl(''),
    createAt: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl('')
  });

  get title() { return this.formGroup.get('title'); }
  get content() { return this.formGroup.get('content'); }
  get image() { return this.formGroup.get('image'); }
  get id() { return this.formGroup.get('id'); }
  get createAt() { return this.formGroup.get('createAt'); }

  constructor(
    private modalService: ModalService,
    private ngbModal: NgbModal,
  ) { }

  ngOnInit(): void {
    this.modalService.openAddArticleModal$.subscribe((article) => {
      if(article.id) {
        this.btnTitle = "Update";
        this.lbTitle = "Update Article";
        this.formGroup.patchValue({
          id: article.id,
          title: article.title,
          content: article.content,
          createAt: article.createdAt,
          image: article.image,
        })
      } else {
        this.btnTitle = "Add";
        this.lbTitle = "Add Article";
      }
     
      this.ngbModal.open(this.elementRef).result.then((result) => {
        this.processAddOrUpdate(result)
      }, (reason) => { });
    })
  }
  private processAddOrUpdate(result: string) {
    if(result === 'Save click') {
      
      if(this.formGroup.invalid) return;
      const article: Article = {
        id: this.id?.value,
        title: this.title?.value,
        content: this.content?.value,
        createdAt: this.createAt?.value,
        image: this.image?.value,
      }
      if(article.id) {
        this.updateArticle.emit(article);
      } else {
        this.addArticle.emit(article);
      }
      this.formGroup.reset();
    } else {
      this.formGroup.reset();
    }
  }

}
