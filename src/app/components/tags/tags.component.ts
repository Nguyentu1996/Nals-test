import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Output() openArticleModal = new EventEmitter();
  constructor(
  ) { }

  addArticle() {
    this.openArticleModal.emit();
  }
}
