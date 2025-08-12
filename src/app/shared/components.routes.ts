import { Routes } from '@angular/router';
import { CardUsuariosComponent } from './components/card-usuarios/card-usuarios.component';


export const routes: Routes = [

  { path: 'usuarios', loadComponent: () => import('./components/card-usuarios/card-usuarios.component').then(m => m.CardUsuariosComponent) }

];




