import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  // our DishService is ready to supply DISHES to any other
  // JS object that requires it in our app
  // Return a Promise instead, if correctly resolved, will be type Dish[]
  getDishes(): Observable<Dish[]> {
      return this.http.get(baseURL + 'dishes')
        .map(res => { return this.processHTTPMsgService.extractData(res); })
        .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  // Get Dish based on ID
  getDish(id: number): Observable<Dish> {
      return this.http.get(baseURL + 'dishes/' + id)
        .map(res => { return this.processHTTPMsgService.extractData(res); })
        .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  // Get Dish based on featured flag
  getFeaturedDish(): Observable<Dish> {
      return this.http.get(baseURL + 'dishes?featured=true')
        .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
        .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getDishIds(): Observable<number[]>{
    // Convert each dish in DISHES using map to a new number array of dish.id
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id); })
      .catch(error => { return error; });
  }

}
