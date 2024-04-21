import { Component, Input } from '@angular/core';
import { IUser } from 'src/types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: IUser | undefined;
  ProfilePlaceholder: string = '../../../assets/icons/profile-placeholder.svg';
}
