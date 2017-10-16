import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  // our DishService is ready to supply DISHES to any other
  // JS object that requires it in our app
  getDishes(): Dish[] {
    return DISHES;
  }

  // Get Dish based on ID
  getDish(id: number): Dish {
    // shorthand for function using arrow function
    // select 0th index since DISHES is a list
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  // Get Dish based on featured flag
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }

}
