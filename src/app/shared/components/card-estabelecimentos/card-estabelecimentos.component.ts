// cards-usuarios.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EstabelecimentosService, Estabelecimento } from '../../../services/estabelecimentos.service';


@Component({
  selector: 'app-card-estabelecimentos',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './card-estabelecimentos.component.html',
  styleUrls: ['./card-estabelecimentos.component.scss']
})

export class CardEstabelecimentosComponent implements OnInit {
  @Input() estabelecimento: any;
  @Output() curtir = new EventEmitter<string>();
  estabelecimentos: any[] = [];

  constructor(
    private router: Router,
    private estabelecimentoService: EstabelecimentosService
  ) { }

  ngOnInit(): void {
    // Busca todos os estabelecimentos ao acessar a rota
    this.estabelecimentoService.getEstabelecimentos().subscribe((dados: any[]) => {
      this.estabelecimentos = dados;
    }, (erro) => {
      console.error('Erro ao buscar estabelecimentos:', erro);
    });
  }


  curtirEstabelecimento(estabelecimento: any): void {
    estabelecimento.isLiked = !estabelecimento.isLiked;
    this.curtir.emit(estabelecimento.id);
  }

  navegarEstabelecimento(estabelecimento: any): void {
    console.log('Navegando para o estabelecimento:', estabelecimento);
    this.estabelecimentoService.estabelecimentoSendoVisto = estabelecimento;
    this.router.navigate(['/estabelecimentos']);
  }
}
