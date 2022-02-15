import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchValue: new FormControl('')
  });
  constructor() {}

  onSubmit() {
    this.search.emit(this.searchForm.controls['searchValue'].value);
  }
}
