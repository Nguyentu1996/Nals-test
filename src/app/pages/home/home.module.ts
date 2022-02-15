import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateArticleModalComponent } from 'src/app/components/add-update-article-modal/add-update-article-modal.component';
import { CkeditorComponent } from 'src/app/components/ckeditor/ckeditor.component';
import { MediaListComponent } from 'src/app/components/media-list/media-list.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { TagsComponent } from 'src/app/components/tags/tags.component';
import { ImgFallbackDirective } from 'src/app/directives/image-fallback.directive';
import { HomeComponent } from './home.component';

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
    ImgFallbackDirective,
    AddUpdateArticleModalComponent,
    CkeditorComponent
  ],
  providers: []
})
export class HomeModule {}
