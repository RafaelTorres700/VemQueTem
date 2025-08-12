import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventosService } from '../../../services/eventos.service';


@Component({
  selector: 'app-card-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-eventos.component.html',
  styleUrls: ['./card-eventos.component.scss']
})
export class CardEventosComponent {
  @Input() evento: any;
  @Output() curtir = new EventEmitter<string>();
  @Output() reservar = new EventEmitter<string>();
  eventos: any[] = [];




  constructor(
    private router: Router,
    private eventosService: EventosService
  ) { }

  ngOnInit(): void {
    if (!this.evento) {
      this.eventosService.getEventos().subscribe({
        next: (dados: any[]) => {
          this.eventos = dados;
        },
        error: (erro) => {
          console.error('Erro ao buscar eventos:', erro);
        }
      });
    }
  }


  navegarEvento(evento: any) {
    this.eventosService.eventoSendoVisto = evento;
    this.router.navigate(['/eventos', { id: evento.id }]);
  }

  curtirEvento(evento: any): void {
    evento.isLiked = !evento.isLiked;
    this.curtir.emit(evento.id);
  }

}

