<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../sidebar.service'; // ajuste o caminho se necessário
=======
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { RouterLink } from '@angular/router';
>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
<<<<<<< HEAD
  constructor(public sidebarService: SidebarService) { }
=======

  sideBarService = inject(SidebarService);

  

>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1
}
