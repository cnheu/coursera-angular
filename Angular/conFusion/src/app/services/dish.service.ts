import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  // our DishService is ready to supply DISHES to any other
  // JS object that requires it in our app
  // Return a Promise instead, if correctly resolved, will be type Dish[]
  getDishes(): Promise<Dish[]> {
    // Resolves immediately, since it's a constant, won't be the same with server
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(DISHES), 2000)
    });
  }

  // Get Dish based on ID
  getDish(id: number): Promise<Dish> {
    // shorthand for function using arrow function
    // select 0th index since DISHES is a list
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000)
    });

  }

  // Get Dish based on featured flag
  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]), 2000)
    });
  }

}
