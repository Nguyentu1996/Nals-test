import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  searchValue = new FormControl('');
  constructor() {}

  onSearch() {
    this.search.emit(this.searchValue.value);
  }
}
