import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class DishService {

  constructor() { }

  // our DishService is ready to supply DISHES to any other
  // JS object that requires it in our app
  // Return a Promise instead, if correctly resolved, will be type Dish[]
  getDishes(): Observable<Dish[]> {
    // ***** Pure Promise Implementation *****
    // // Resolves immediately, since it's a constant, won't be the same with server
    // return new Promise(resolve => {
    //   // Simulate server latency with 2s delay
    //   setTimeout(() => resolve(DISHES), 2000)
    // });
    return Observable.of(DISHES).delay(2000);
  }

  // Get Dish based on ID
  getDish(id: number): Observable<Dish> {
    // shorthand for function using arrow function
    // select 0th index since DISHES is a list
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0])
      .delay(2000);
  }

  // Get Dish based on featured flag
  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.featured))[0])
      .delay(2000);
  }

  getDishIds(): Observable<number[]>{
    // Convert each dish in DISHES using map to a new number array of dish.id
    return Observable.of(DISHES.map(dish => dish.id)).delay(2000);
  }

}
