import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/services/model.service';

@Component({
  selector: 'app-add-update-article-modal',
  templateUrl: './add-update-article-modal.component.html',
  styleUrls: ['./add-update-article-modal.component.css']
})
export class AddUpdateArticleModalComponent implements OnInit {

  @ViewChild('contentModal')
  content!: ElementRef;
  btnTitle: string = "Add";
  lbTitle: string = "Add Article"
  formGroup = new FormGroup({
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    id: new FormControl(0),
    createAt: new FormControl(''),
    content: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  });
  
  constructor(
    private modalService: ModalService,
    private ngbModal: NgbModal,
  ) { }

  ngOnInit(): void {
    this.modalService.openAddArticleModal$.subscribe(notif => {
      this.ngbModal.open(this.content).result.then((result) => {
        if(result === 'Save click') {
          console.log(this.formGroup.value)
          console.log(this.formGroup.invalid)
        }
      });
    })
  }
}
