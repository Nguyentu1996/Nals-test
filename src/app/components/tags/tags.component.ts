import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/model.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(
    private modalService: ModalService
  ) { }

  addArticle() {
    this.modalService.openAddOrUpdateArticleModal('add');
  }
}
