import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateArticleModalComponent } from 'src/app/components/add-update-article-modal/add-update-article-modal.component';
import { MediaListComponent } from 'src/app/components/media-list/media-list.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { TagsComponent } from 'src/app/components/tags/tags.component';
import { HomeComponent } from './home.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from 'src/app/components/ckeditor/ckeditor.component';
import { ImagePipe } from 'src/app/pipes/image-pipe';

const router = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,

    CKEditorModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    SearchComponent,
    MediaListComponent,
    TagsComponent,
    AddUpdateArticleModalComponent,
    CkeditorComponent,
    ImagePipe
  ],
  providers: []
})
export class HomeModule {}
