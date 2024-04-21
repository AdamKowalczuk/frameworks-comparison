import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authService';
import { PostService } from '../../../services/postService';
import moment from 'moment';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post: any;
  @Output() getPosts: EventEmitter<any> = new EventEmitter();
  auth$: Observable<any>;
  user: any = null;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: any }>
  ) {
    this.auth$ = this.store.pipe(select('auth'));
    this.auth$.subscribe((auth) => {
      this.user = auth.user;
    });
  }

  handleLikePost(): void {
    this.postService.likePostById(this.post._id).subscribe(
      (response: any) => {
        this.getPosts.emit();
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  handleUnlikePost(): void {
    this.postService.unlikePostById(this.post._id).subscribe(
      (response: any) => {
        this.getPosts.emit();
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  formatPostDate(date: string): string {
    return moment(date, 'YYYYMMDD, h:mm:ss a').calendar();
  }
}
