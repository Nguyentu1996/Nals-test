import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/model.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Output() onSort = new EventEmitter<string>();

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  sort(){
    this.onSort.emit()
  }
  addArticle() {
    this.modalService.openAddOrUpdateArticleModal('add');
  }
}
