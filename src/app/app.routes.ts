import { Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CardEstabelecimentosComponent } from './shared/components/card-estabelecimentos/card-estabelecimentos.component';
import { CardEventosComponent }  from './shared/components/card-eventos/card-eventos.component';
import { CardUsuariosComponent } from './shared/components/card-usuarios/card-usuarios.component';




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
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./layout/sidebar/sidebar.component').then(m => m.SidebarComponent)
  },
  { path: 'estabelecimentos/:id',
    loadComponent: () => import('./shared/components/card-estabelecimentos/card-estabelecimentos.component').then(m => m.CardEstabelecimentosComponent)
   },
   {
     path: 'eventos/:id',
     loadComponent: () => import('./shared/components/card-eventos/card-eventos.component').then(m => m.CardEventosComponent)
   },
   {
     path: 'usuarios/:id',
     loadComponent: () => import('./shared/components/card-usuarios/card-usuarios.component').then(m => m.CardUsuariosComponent)
   }


];
