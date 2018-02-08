import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular,
              private processHTTPMsg: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    // NON-SERVER
    // return Observable.of(PROMOTIONS).delay(2000);

    // SERVER
    return this.restangular.all('promotions').getList();
  }

  // Get Dish based on ID
  getPromotion(id: number): Observable<Promotion> {
    // shorthand for function using arrow function
    // select 0th index since DISHES is a list
    // OLD NON SERVER
    // return Observable.of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0])
    //   .delay(2000);

    // SERVER
    return  this.restangular.one('promotions',id).get();
  }

  // Get Dish based on featured flag
  getFeaturedPromotion(): Observable<Promotion> {
    // NON-SERVER
    // return Observable.of(PROMOTIONS.filter((promotion) => (promotion.featured))[0])
    //   .delay(2000);
    var test =  this.restangular.all('promotions').getList({featured: true})
      .map(promotions => promotions[0]);
    console.log(test);
    console.log('In Promotions Service')
    // SERVER
    return test;
  }
}
