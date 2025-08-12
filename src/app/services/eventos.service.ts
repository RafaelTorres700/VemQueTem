import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


export interface Evento {
  id: number;
  estabelecimento_id: number;
  nome_evento: string;
  data_evento: string;
  beneficios: string;
  imagem_evento: string;
  hora_inicio: string;
  hora_final: string;
  obrigatorio_seguranca: boolean;
  valor: number;
  status: string;
  criado_em: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  eventoSendoVisto: Evento | null = null;

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]> {
    return this.http.get<{ data: Evento[] }>('http://localhost:3000/api/eventos').pipe(map(res => res.data));

  }

  // Outros métodos (criar, atualizar, deletar) podem ser adicionados conforme necessidade

}
