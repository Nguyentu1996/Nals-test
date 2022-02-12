import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaListComponent } from 'src/app/components/media-list/media-list.component';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
const router = [
    {
        path: '', component: HomeComponent
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        NgbPaginationModule
    ],
    exports: [],
    declarations: [HomeComponent, MediaListComponent],
    providers: [HomeService],
})
export class HomeModule { }
