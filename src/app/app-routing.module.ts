import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
  },
  {
    path: 'article', component: MainComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('./pages/home/home.module').then(
            m => m.HomeModule
          )
      },
      {
        path: ':id', loadChildren: () =>
          import('./pages/details/details.module').then(
            m => m.DetailsModule
          )
      },
    ]
  },
  {
    path: '', component: MainComponent,
    children: [
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
