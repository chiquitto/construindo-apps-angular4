import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../services/restaurants.service';
import {Restaurant} from '../models/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];

    this.restaurantService.restaurantById(id)
        .subscribe(restaurant => this.restaurant = restaurant)
    ;
  }

}
