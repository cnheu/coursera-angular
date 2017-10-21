import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  // Get Leader based on ID
  getLeader(id: number): Leader {
    // shorthand for function using arrow function
    // select 0th index since LEADERS is a list
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  // Get Leader based on featured flag
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => (leader.featured))[0];
  }

}
