import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CarroceleventComponent } from '../shared/components/carrocelevent/carrocelevent.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterOutlet, CarroceleventComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
