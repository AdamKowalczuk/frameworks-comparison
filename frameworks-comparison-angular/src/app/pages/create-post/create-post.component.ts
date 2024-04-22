import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authService';
import { PostService } from '../../../services/postService';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  createPostForm: FormGroup = new FormGroup({
    caption: new FormControl(''),
    location: new FormControl(''),
    tags: new FormControl(''),
  });
  file: File[] | null = null;
  fileURL: string | null = null;
  loading: boolean = false;
  auth$: Observable<any>;
  user: any = null;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router,
    private store: Store<{ auth: any }>
  ) {
    this.auth$ = this.store.pipe(select('auth'));
    this.auth$.subscribe((auth) => {
      this.user = auth.user;
    });
  }

  handleFileChange(event: any): void {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.fileURL = URL.createObjectURL(selectedFile);
    }
  }

  handleCreatePost(event: any): void {
    event.preventDefault();

    this.loading = true;

    this.postService
      .createPost({
        creator: {
          userId: this.user.userId,
          imageUrl: this.user.imageUrl,
          userName: this.user.userName,
        },
        caption: this.createPostForm.value.caption,
        file: this.file,
        location: this.createPostForm.value.location,
        tags: this.createPostForm.value.tags,
      })
      .subscribe(
        () => {
          this.router.navigate(['/']);
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }

  handleCancel(): void {
    this.router.navigate(['/']);
  }
}
