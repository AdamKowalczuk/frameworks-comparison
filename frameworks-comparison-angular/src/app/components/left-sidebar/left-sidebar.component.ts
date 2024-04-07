import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarLinks } from '../../../constants/index';
import { INavLink } from '../../../types';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent {
  sidebarLinks: INavLink[] = sidebarLinks;
  user: any;

  constructor(
    // private authService: AuthService,
    public router: Router
  ) {
    // this.user = this.authService.getCurrentUser(); // Implementacja tej metody zależy od logiki w AuthService
  }

  handleLogout() {
    // this.authService.logout(); // Implementacja metody logout w AuthService
    this.router.navigate(['/sign-in']);
  }
}
