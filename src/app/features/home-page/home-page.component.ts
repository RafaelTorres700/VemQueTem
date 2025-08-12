import { Component } from '@angular/core';
import { CardUsuariosComponent } from '../../shared/components/card-usuarios/card-usuarios.component';
import { CardEstabelecimentosComponent } from "../../shared/components/card-estabelecimentos/card-estabelecimentos.component";
import { CardEventosComponent } from "../../shared/components/card-eventos/card-eventos.component";

@Component({
  selector: 'app-home-page',
  imports: [CardUsuariosComponent, CardEstabelecimentosComponent, CardEventosComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
