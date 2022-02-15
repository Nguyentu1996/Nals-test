import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from 'src/app/components/toast/toast.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbCollapseModule, NgbToastModule],
  exports: [],
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ToastComponent
  ],
  providers: []
})
export class MainModule {}
