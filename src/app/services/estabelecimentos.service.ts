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
  // Variável para armazenar o estabelecimento que está sendo visualizado
  estabelecimentoSendoVisto: any = null;

  constructor(private http: HttpClient) { }


getEstabelecimentos(): Observable<Estabelecimento[]> {
  return this.http.get<any>('http://localhost:3000/api/estabelecimentos')
    .pipe(map(res => res.data));
}



  getEstabelecimentoPorId(id_estabelecimento: string): Observable<Estabelecimento> {
    return this.http.get<any>(`http://localhost:3000/api/estabelecimentos/${id_estabelecimento}`)
      .pipe(map(res => res.data));
  }
// Outros métodos (criar, atualizar, deletar) podem ser adicionados conforme necessidade
  curtir(): void {
    // Lógica para curtir estabelecimento
    console.log('Estabelecimento curtido');
  }

}
