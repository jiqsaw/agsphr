import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @Output() searchSubmit = new EventEmitter<string>();

  @Input() isLoading$;

  city = '';

  constructor() { }

  search() {
    if (this.city.length >= 2) {
      this.searchSubmit.emit(this.city);
      this.city = '';
    }
  }
}
