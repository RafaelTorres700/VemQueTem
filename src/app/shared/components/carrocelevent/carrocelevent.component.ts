import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { CardEventosComponent } from '../card-eventos/card-eventos.component';



@Component({
  selector: 'app-carrocelevent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrocelevent.component.html',
  styleUrls: ['./carrocelevent.component.scss']
})
export class CarroceleventComponent implements OnInit {

  @Input() evento: any;
  @Output() curtir = new EventEmitter<string>();
  @Output() reservar = new EventEmitter<string>();
  eventos: any[] = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventosService: EventosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventosService.getEventoPorId(+id).subscribe({
        next: (evento: any) => {
          this.eventos = [evento];
        },
        error: (erro) => {
          console.error('Erro ao buscar evento:', erro);
        }
      });
    } else {
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

  navegarEvento(evento: any): void {
    this.router.navigate(['/eventos', evento.id]);
    console.log(`Navegando para o evento: ${evento.id}`);

  }



  curtirEvento(evento: any): void {
    evento.isLiked = !evento.isLiked;
    this.curtir.emit(evento.id);
    console.log(`Curtido evento: ${evento.id}, status: ${evento.isLiked ? 'curtido' : 'descurtido'}`);
  }


}

