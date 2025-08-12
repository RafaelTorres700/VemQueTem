import { Routes } from '@angular/router';
<<<<<<< HEAD
import { SidebarComponent } from './layout/sidebar/sidebar.component';
=======
>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'tela-inicial',
    pathMatch: 'full'
  },
  {
    path: 'tela-inicial',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    loadChildren: () => import('./features/features.routes').then(m => m.routes)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'create-login',
    loadComponent: () => import('./pages/create-login/create-login.component').then(m => m.CreateLoginComponent)
<<<<<<< HEAD
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./layout/sidebar/sidebar.component').then(m => m.SidebarComponent)
=======
>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1
  }


];
