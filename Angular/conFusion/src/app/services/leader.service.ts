import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
              private processHTTPMsg: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  // Get Leader based on ID
  getLeader(id: number): Observable<Leader> {
    // shorthand for function using arrow function
    // select 0th index since LEADERS is a list
    return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
  }

  // Get Leader based on featured flag
  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
  }

}
