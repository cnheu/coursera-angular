import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(PROMOTIONS), 2000)
    });
  }

  // Get Dish based on ID
  getPromotion(id: number): Promise<Promotion> {
    // shorthand for function using arrow function
    // select 0th index since DISHES is a list
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]), 2000)
    });
  }

  // Get Dish based on featured flag
  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.featured))[0]), 2000)
    });
  }

}
