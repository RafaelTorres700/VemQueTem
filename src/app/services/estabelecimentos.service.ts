import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Estabelecimento {
  id: string;
  nome: string;
  tipo: string;
  categoria: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  email: string;
  fotoUrl: string;
  descricao: string;
  horarioFuncionamento: string;
  avaliacaoMedia: number;
  faixaPreco: string;
  especialidades: string[];
}

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {
  estabelecimentoSendoVisto: any = null;

  constructor(private http: HttpClient) { }


getEstabelecimentos(): Observable<Estabelecimento[]> {
  return this.http.get<any>('http://localhost:3000/api/estabelecimentos')
    .pipe(map(res => res.data));
}

}
