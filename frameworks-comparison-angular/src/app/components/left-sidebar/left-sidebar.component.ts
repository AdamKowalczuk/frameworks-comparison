// sidebar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarLinks } from '../../../constants/index';
import { AuthService } from '../../../services/authService';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent {
  sidebarLinks = sidebarLinks;
  ProfilePlaceholder = '../../../assets/icons/profile-placeholder.svg';
  auth$: Observable<any>;
  user: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: any }>
  ) {
    this.auth$ = this.store.pipe(select('auth'));
    this.auth$.subscribe((auth) => {
      this.user = auth.user;
    });
  }

  isLinkActive(route: string): boolean {
    return this.router.url === route;
  }

  handleLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }
}
