import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return Observable.of(PROMOTIONS).delay(2000);
  }

  // Get Dish based on ID
  getPromotion(id: number): Observable<Promotion> {
    // shorthand for function using arrow function
    // select 0th index since DISHES is a list
    return Observable.of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0])
      .delay(2000);
  }

  // Get Dish based on featured flag
  getFeaturedPromotion(): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promotion) => (promotion.featured))[0])
      .delay(2000);
  }
}
