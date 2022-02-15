import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/interface/article';
import { AddArticleReq } from 'src/app/request/add-article';
import { UpdateArticleReq } from 'src/app/request/update-article';

@Component({
  selector: 'app-add-update-article-modal',
  templateUrl: './add-update-article-modal.component.html',
  styleUrls: ['./add-update-article-modal.component.css']
})
export class AddUpdateArticleModalComponent implements OnInit {
  @Input() btnTitle: string = 'Add';
  @Input() lbTitle: string = 'Add Article';
  @Input()
  article!: Article;

  file: File | null = null;
  formGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100)
    ]),
    id: new FormControl(''),
    createAt: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl('')
  });

  get title() {
    return this.formGroup.get('title');
  }
  get content() {
    return this.formGroup.get('content');
  }
  get image() {
    return this.formGroup.get('image');
  }
  get id() {
    return this.formGroup.get('id');
  }
  get createAt() {
    return this.formGroup.get('createAt');
  }

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.formGroup.reset({
      id: this.article.id,
      title: this.article.title,
      content: this.article.content,
      createAt: this.article.created_at,
      image: this.article.image.url
    });
  }

  save() {
    if (this.formGroup.invalid) return;
    let formData: any = new FormData();
    formData.append('blog[title]', this.title?.value);
    formData.append('blog[content]', this.content?.value);
    if (this.file) {
      formData.append('blog[image]', this.file);
    }
    if (this.id?.value) {
      const payload: UpdateArticleReq = {
        formData: formData,
        id: this.id?.value
      };
      this.activeModal.close(payload);
    } else {
      const payload: AddArticleReq = {
        formData: formData
      };
      this.activeModal.close(payload);
    }
    this.formGroup.reset();
  }

  onFileSelected(event: any) {
    let file: File = event.target.files[0];
    if (!file) return;
    this.image?.setValue(file.name);
    this.file = file;
  }
}
