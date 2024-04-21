import { Component, OnInit } from '@angular/core';
import { IPost, IUser } from '../../../types/index';
import { PostService } from '../../../services/postService';
import { AuthService } from '../../../services/authService';
import * as AuthActions from '../../store/auth.actions';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {
  isPostsLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  savedPosts: IPost[] = [];
  auth$: Observable<any>;
  user: any = null;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private store: Store<{ auth: any }>
  ) {
    this.auth$ = this.store.pipe(select('auth'));
    this.auth$.subscribe((auth) => {
      this.user = auth.user;
    });
  }

  ngOnInit(): void {
    this.isPostsLoading.next(true);

    if (this?.user?.userId) {
      this.postService.getLikedPosts(this.user?.userId).subscribe(
        (response) => {
          this.savedPosts = response.likedPosts;

          this.isPostsLoading.next(false);
          console.log(this.savedPosts);
          console.log(this.isPostsLoading.value);
        },
        (error) => {
          console.error('Error fetching posts:', error);
          this.isPostsLoading.next(false);
        }
      );
    }
  }
}
