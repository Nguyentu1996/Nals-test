import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';


@NgModule({
    imports: [
        RouterModule,
        NgbCollapseModule,
        
    ],
    exports: [],
    declarations: [
        MainComponent,
        FooterComponent,
        HeaderComponent,
        
    ],
    providers: [],
})
export class MainModule { }
