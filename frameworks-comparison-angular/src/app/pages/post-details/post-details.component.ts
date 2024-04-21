import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../../services/postService';
import { IPost } from '../../../types/index';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  post: IPost | null = null;
  isPostLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(
        (response: any) => {
          this.post = response.post;
          this.isPostLoading = false;
        },
        (error: any) => {
          console.error('Error fetching post:', error);
        }
      );
    }
  }

  goBack(): void {
    this.location.back();
  }
}
