import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateArticleModalComponent } from './add-update-article-modal.component';

describe('AddUpdateArticleModalComponent', () => {
  let component: AddUpdateArticleModalComponent;
  let fixture: ComponentFixture<AddUpdateArticleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateArticleModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateArticleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
