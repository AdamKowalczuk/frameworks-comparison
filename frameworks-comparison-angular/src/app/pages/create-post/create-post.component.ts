import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authService';
import { PostService } from '../../../services/postService';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  caption: string = '';
  location: string = '';
  tags: string = '';
  file: File | null = null;
  fileURL: string | null = null;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) {}

  handleFileChange(event: any): void {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.fileURL = URL.createObjectURL(selectedFile);
    }
  }

  handleCreatePost(event: any): void {
    event.preventDefault();

    // const { userId, imageUrl, userName } = this.authService.getCurrentUser();

    // this.loading = true;

    // this.postService
    //   .createPost({
    //     creator: { userId, imageUrl, userName },
    //     caption: this.caption,
    //     file: this.file,
    //     location: this.location,
    //     tags: this.tags,
    //   })
    //   .subscribe(
    //     () => {
    //       this.router.navigate(['/']);
    //       this.loading = false;
    //     },
    //     () => {
    //       this.loading = false;
    //     }
    //   );
  }

  handleCancel(): void {
    this.router.navigate(['/']);
  }
}
