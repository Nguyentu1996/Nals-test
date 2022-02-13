import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchValue: new FormControl(''),
    
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.onSearch.emit(this.searchForm.controls['searchValue'].value)
  }

}
