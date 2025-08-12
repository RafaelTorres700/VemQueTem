<<<<<<< HEAD
import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
=======
import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
<<<<<<< HEAD
  constructor(public sidebarService: SidebarService) { }
=======

  sideBarService = inject(SidebarService);


  toggleideBar(){
    this.sideBarService.toggle();
  }

>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1
}
