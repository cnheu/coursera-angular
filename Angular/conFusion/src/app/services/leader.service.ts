import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS), 2000)
    });
  }

  // Get Leader based on ID
  getLeader(id: number): Promise<Leader> {
    // shorthand for function using arrow function
    // select 0th index since LEADERS is a list
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000)
    });
  }

  // Get Leader based on featured flag
  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.featured))[0]), 2000)
    });
  }

}
