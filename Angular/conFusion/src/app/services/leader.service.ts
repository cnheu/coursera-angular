import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  // Get Leader based on ID
  getLeader(id: number): Promise<Leader> {
    // shorthand for function using arrow function
    // select 0th index since LEADERS is a list
    return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }

  // Get Leader based on featured flag
  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.featured))[0]);
  }

}
