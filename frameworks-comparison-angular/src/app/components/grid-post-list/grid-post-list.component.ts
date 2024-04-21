import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-post-list',
  templateUrl: './grid-post-list.component.html',
  styleUrls: ['./grid-post-list.component.scss'],
})
export class GridPostListComponent {
  @Input() posts: any[] = [];
  @Input() showUser: boolean = true;
  ProfilePlaceholder: string = '../../../assets/icons/profile-placeholder.svg';
}
