import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  aberto: boolean = false;

  abrir(){
    this.aberto = true;
  }

  fechar(){
    this.aberto = false;
  }

  toggle(){
    this.aberto = !this.aberto;
  }

}
