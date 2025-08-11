import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  aberto: boolean = false;

  constructor() { }

  fechar() {
    this.aberto = false;
  }

  abrir() {
    this.aberto = true;
  }

  toggle() {
    this.aberto = !this.aberto;
  }
}
