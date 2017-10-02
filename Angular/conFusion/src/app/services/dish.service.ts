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

}
