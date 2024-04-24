import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ],
})
export class SearchComponent {
  @Input() placeholder: string = '';

  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  searchQuery: string = '';

  @Output() searchQueryChange: EventEmitter<string> =
    new EventEmitter<string>();

  updateSearchQuery(): void {
    this.searchQueryChange.emit(this.searchQuery);
  }
  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.onSearch.emit(this.searchQuery);
    }
  }
}
