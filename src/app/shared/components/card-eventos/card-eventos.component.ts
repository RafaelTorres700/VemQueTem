import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventosService, Evento } from '../../../services/eventos.service';


@Component({
  selector: 'app-card-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-eventos.component.html',
  styleUrls: ['./card-eventos.component.scss']
})
export class CardEventosComponent implements OnInit {
  @Input() evento: any[] = [];
  @Output() curtir = new EventEmitter<string>();
  eventos: any[] = [];




  constructor(
    private router: Router,
    private eventosService: EventosService,
  ) { }

  ngOnInit(): void {
    // Busca todos os eventos ao acessar a rota
    this.eventosService.getEventos().subscribe((dados: Evento[]) => {
      this.eventos = dados;
    }, (erro) => {
      console.error('Erro ao buscar eventos:', erro);
    });
  }

  curtirEvento(evento: any): void {
    console.log('Curtindo evento:', evento.id);
    this.curtir.emit(evento.id);
  }

  navegarEvento(evento: any): void {
    console.log('Navegando para o evento:', evento);
    this.eventosService.eventoSendoVisto = evento;
    this.router.navigate(['/eventos']);
  }
}
