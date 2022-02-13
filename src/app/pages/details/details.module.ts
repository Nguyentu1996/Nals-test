import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

const router = [
    {
        path: '', component: DetailsComponent
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router)
    ],
    exports: [],
    declarations: [DetailsComponent],
    providers: [],
})
export class DetailsModule { }
