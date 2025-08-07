import { Routes } from '@angular/router';

export const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'teste',
    loadComponent: () => import('./teste/teste.component').then(m => m.TesteComponent)
  },


];
