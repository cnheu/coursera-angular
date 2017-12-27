import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // Declare dish CONST
  // Remove @Input, cos it's no longer an input but going to be done
  // through the router
  // @Input()
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  // Declare comments list
  // comments = this.dish.comments;

  // dish value is no longer available from the dish component
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // fetch the id from the route parameters (i.e. the url)
    // the route will be /dishdetail/X
    // take a snapshot out of the route params observable
    // let id = +this.route.snapshot.params['id'];

    // Subscribe to a list of dishIds
    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);

    // Whenever params observable changes, we use switchMap to conver it to id
    // then your subscribing to the change and updating dish
    this.route.params
      // + converts string into numeric value
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']) )
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id)
      });
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length]

  }

  goBack(): void {
    // location service has a back function to use browser history
    this.location.back();
  }

}
