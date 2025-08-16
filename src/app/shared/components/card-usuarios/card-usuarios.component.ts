import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuariosService.getUsuarioPorId(id).subscribe((usuario: any) => {
        this.usuarios = [usuario];
      }, (erro) => {
        console.error('Erro ao buscar usuário:', erro);
      });
    } else {
      this.usuariosService.getUsuarios().subscribe((dados: any[]) => {
        this.usuarios = dados;
      }, (erro) => {
        console.error('Erro ao buscar usuários:', erro);
      });
    }
  }



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


  navegarUsuario(user: any): void {
    this.router.navigate(['/usuarios', user.id]);
  }



  curtirUsuario(usuario: any): void {
    usuario.isLiked = !usuario.isLiked;
    this.curtir.emit(usuario.id);
    console.log(`Curtido usuário: ${usuario.id}, status: ${usuario.isLiked ? 'curtido' : 'descurtido'}`);
  }


}

