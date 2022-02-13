import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../services/model.service';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.css']
})
export class DialogErrorComponent implements OnInit {
  @ViewChild('content')
  content!: ElementRef;

  isOpen = false;
  constructor(
    private ngbModal: NgbModal,
    private modalService: ModalService
    ) {}

  ngOnInit(): void {
    this.modalService.openErrorModal$.subscribe(content => {
      if(!this.isOpen)
        this.open()
    })
  }

  open() {
    this.isOpen = true;
    this.ngbModal.open(this.content, { centered: true });
  }

}
