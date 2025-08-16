import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Usuario {
  id: string;
  nome: string;
  genero: string;
  dataNascimento: string;
  localizacao: string;
  fotoUrl: string;
  miniBio: string;
  interesses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // Variável para armazenar o usuário que está sendo visualizado
  usuarioSendoVisto: any = null;

  constructor(public http: HttpClient) { }

  // Método para obter a lista de usuários do backend
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<any>('http://localhost:3000/api/usuarios')
    .pipe(map(res => res.data));
  }

  getUsuarioPorId(id: string): Observable<Usuario> {
    return this.http.get<any>(`http://localhost:3000/api/usuarios/${id}`)
    .pipe(map(res => res.data));
  // Outros métodos (criar, atualizar, deletar) podem ser adicionados conforme necessidade
  }

}
