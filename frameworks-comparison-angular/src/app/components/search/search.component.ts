import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder: string | undefined;
  @Input() value: string | undefined;
  @Input() onChange: ((query: string) => void) | undefined;
  inputValue: string = '';

  constructor() {}

  handleInputChange(event: any) {
    if (this.onChange) {
      this.onChange(event.target.value);
    }
  }

  handleKeyPress(event: any) {
    if (event.key === 'Enter' && this.onChange) {
      this.onChange(this.inputValue);
    }
  }
}
