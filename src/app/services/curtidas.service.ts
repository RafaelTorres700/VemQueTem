import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurtidasService {

  constructor(private http: HttpClient) { }
  curtirUsuario(id_usuario: number, id_alvo: number, tipo_alvo: string, curtir: boolean) {
    return this.http.post('http://localhost:3000/api/curtidas', {
      id_usuario,
      id_alvo,
      tipo_alvo,
      curtir
    });
  }
}
