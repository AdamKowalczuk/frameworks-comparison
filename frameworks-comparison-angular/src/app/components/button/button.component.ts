import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'outlined' = 'primary';
  @Input() text: string | undefined;
  @Input() onClick: (() => void) | undefined;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconLeft: string | undefined;
  @Input() iconRight: string | undefined;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';

  constructor() {}

  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
