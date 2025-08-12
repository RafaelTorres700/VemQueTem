import { Component } from '@angular/core';
import { CardUsuariosComponent } from '../../shared/components/card-usuarios/card-usuarios.component';

@Component({
  selector: 'app-home-page',
  imports: [CardUsuariosComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
