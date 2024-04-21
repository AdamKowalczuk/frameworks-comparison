import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/postService';
import { IPost } from '../../../types/index';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: IPost[] = [];
  searchQuery: FormControl = new FormControl('');

  isPostsLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.isPostsLoading.next(true);
    this.postService.getPosts().subscribe(
      (response: any) => {
        this.posts = response.posts.reverse();
        this.isPostsLoading.next(false);
      },
      (error: any) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  searchPosts(): void {
    console.log('searchQuery', this.searchQuery.value);

    this.isPostsLoading.next(true);
    if (this.searchQuery.value.length > 0) {
      this.postService.searchPosts(this.searchQuery.value).subscribe(
        (response: any) => {
          this.posts = response.posts;
          this.isPostsLoading.next(false);
        },
        (error: any) => {
          this.posts = [];
          console.error('Error fetching posts:', error);
        }
      );
    } else {
      this.getPosts();
    }
  }
}
