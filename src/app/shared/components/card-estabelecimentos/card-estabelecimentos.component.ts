// cards-usuarios.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private estabelecimentoService: EstabelecimentosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.estabelecimentoService.getEstabelecimentoPorId(id).subscribe((estab: any) => {
        this.estabelecimentos = [estab];
      });
    } else {
      this.estabelecimentoService.getEstabelecimentos().subscribe((dados: any[]) => {
        this.estabelecimentos = dados;
      });
    }
  }


  navegarEstabelecimento(estab: any): void {
    this.router.navigate(['/estabelecimentos', estab.id_estabelecimento]);
  }


  curtirEstabelecimento(estab: any): void {
    estab.isLiked = !estab.isLiked;
    this.curtir.emit(estab.id_estabelecimento);
    console.log(`Curtido estabelecimento: ${estab.id_estabelecimento}, status: ${estab.isLiked ? 'curtido' : 'descurtido'}`);
  }



}
