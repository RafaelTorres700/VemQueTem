import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';




@Component({
  selector: 'app-card-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-usuarios.component.html',
  styleUrls: ['./card-usuarios.component.scss']

})
export class CardUsuariosComponent {
  @Input() user: any;
  @Output() curtir = new EventEmitter<string>();
  @Output() convidar = new EventEmitter<string>();
  usuarios: any[] = [];

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    // Só busca todos os usuários se NÃO receber um user via input
    if (!this.user) {
      this.usuariosService.getUsuarios().subscribe((dados: any[]) => {
        this.usuarios = dados;
      }, (erro) => {
        console.error('Erro ao buscar usuários:', erro);
      });
    }
  }

  contador = 0;

  calcularIdade(nascimento?: string): number | null {
    const data = nascimento || this.user?.nascimento;
    if (!data) return null;
    const hoje = new Date();
    const nascimentoDate = new Date(data);
    let idade = hoje.getFullYear() - nascimentoDate.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimentoDate.getMonth();
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimentoDate.getDate())) {
      idade--;
    }
    return idade;
  }


  navegarUsuario(user: any) {
    this.usuariosService.usuarioSendoVisto = user;
    this.router.navigate(['/usuarios', { id: user.id }]);
  }

  curtirUsuario(usuario: any): void {
    usuario.isLiked = !usuario.isLiked;
    this.curtir.emit(usuario.id);
  }


}

