import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() value: string | undefined;
  @Input() type: string = 'text';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
