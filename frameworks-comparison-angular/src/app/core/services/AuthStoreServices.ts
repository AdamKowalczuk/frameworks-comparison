import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../../types/index';
import { AuthService } from '../../../services/authService';
import { UserService } from '../../../services/userService';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private userSubject: BehaviorSubject<IUser | null>;
  public user$ = this.userSubject.asObservable();

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    const userDataFromLocalStorage = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<IUser | null>(
      userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : null
    );
  }

  get user(): IUser | null {
    return this.userSubject.value;
  }

  set user(value: IUser | null) {
    this.userSubject.next(value);
    localStorage.setItem('user', JSON.stringify(value));
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const res = await this.authService.login(email, password);
      this.user = res.user;
    } catch (error) {
      throw error;
    }
  }

  async register(
    userName: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      const res = await this.authService.register({
        userName,
        email,
        password,
      });
      this.user = res.user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId: string, userData: IUser): Promise<void> {
    try {
      const data: any = await this.userService.editUser({
        userId: userId,
        userData,
      });
      this.user = {
        imageUrl: data.user.imageUrl,
        userId: data.user._id,
        userName: data.user.userName,
        bio: data.user.bio,
      };
    } catch (error) {
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.user = null;
  }
}
