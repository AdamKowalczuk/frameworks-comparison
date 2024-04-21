import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IUser } from '../../../types/index';
import { AuthService } from '../../../services/authService';
import { UserService } from '../../../services/userService';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  activeUser: IUser | undefined;
  auth$: Observable<any>;
  user: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private store: Store<{ auth: any }>
  ) {
    this.auth$ = this.store.pipe(select('auth'));
    this.auth$.subscribe((auth) => {
      this.user = auth.user;
    });
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['id']),
        switchMap((userId) => this.userService.getUserById(userId))
      )
      .subscribe(
        (response) => (this.activeUser = response.user),
        (error) => console.error('Error fetching user:', error)
      );
  }

  handleEditProfile(): void {
    if (this.activeUser) {
      this.router.navigate(['/update-profile', this.activeUser._id]);
    }
  }
}
