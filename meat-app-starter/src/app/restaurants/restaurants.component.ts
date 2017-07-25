import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../models/restaurant.model';
import {RestaurantsService} from '../services/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
        .subscribe((restaurants) => {
          this.restaurants = restaurants;
          // console.log(this.restaurants);
        })
    ;
  }

}
