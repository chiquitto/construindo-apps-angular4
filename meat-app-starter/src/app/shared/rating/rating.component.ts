import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {isNumber} from "util";

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];

  rate = 0;

  previousRate = 0;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.previousRate = r;
    this.rate = r;

    this.rated.emit(r);
  }

  setTemporaryRate(r: number) {
    this.rate = r;
  }

  clearTemporaryRate() {
    this.rate = this.previousRate;
  }


}
