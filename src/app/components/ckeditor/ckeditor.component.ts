import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as customBuild from '../../custom-build-ckeditor/build/ckeditor';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CkeditorComponent),
      multi: true
    }
  ]
})
export class CkeditorComponent implements OnInit, ControlValueAccessor {
  public editor = customBuild;

  private _value: string = '';

  get value() {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  constructor() { }

  onChange(value: any) {}

  onTouch() { }

  writeValue(obj: any): void {
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn; 
  }

  ngOnInit(): void {
  }

  // onReady(editor: any) {
  //   if (editor.model.schema.isRegistered('image')) {
  //     editor.model.schema.extend('image', { allowAttributes: 'blockIndent' });
  //   }
  // }

 
}


  