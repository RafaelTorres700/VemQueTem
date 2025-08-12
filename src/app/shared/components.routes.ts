import { Routes } from '@angular/router';
import { CardUsuariosComponent } from './components/card-usuarios/card-usuarios.component';
import { CardEventosComponent } from './components/card-eventos/card-eventos.component';

export const routes: Routes = [

  { path: 'usuarios', loadComponent: () => import('./components/card-usuarios/card-usuarios.component').then(m => m.CardUsuariosComponent) },
  { path: 'eventos', loadComponent: () => import('./components/card-eventos/card-eventos.component').then(m => m.CardEventosComponent) },


];




