import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaListComponent } from 'src/app/components/media-list/media-list.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { TagsComponent } from 'src/app/components/tags/tags.component';
import { HomeComponent } from './home.component';

const router = [
    {
        path: '', component: HomeComponent
        
    },
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        NgbPaginationModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        HomeComponent, 
        SearchComponent,
        MediaListComponent,
        TagsComponent,
    ],
    providers: [],
})
export class HomeModule { }
