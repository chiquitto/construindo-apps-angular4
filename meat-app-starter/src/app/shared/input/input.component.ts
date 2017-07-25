import {Component, Input, OnInit, ContentChild, AfterContentInit} from '@angular/core';
import {FormControlName, NgModel} from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  entrada: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.entrada = this.model || this.control;
    if (this.entrada === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  hasSuccess(): boolean {
    return this.entrada.valid && (this.entrada.dirty || this.entrada.touched);
  }

  hasError(): boolean {
    return this.entrada.invalid && (this.entrada.dirty || this.entrada.touched);
  }

}
