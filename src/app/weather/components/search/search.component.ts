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
    this.searchSubmit.emit(this.city);
    this.city = '';
  }
}
