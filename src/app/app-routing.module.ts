import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path:'', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule) }
    ]
  },
  {
    path: '', component: MainComponent,
    children: [
      { path:'**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
