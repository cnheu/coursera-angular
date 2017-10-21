import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

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
  // Declare comments list
  // comments = this.dish.comments;

  // dish value is no longer available from the dish component
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // fetch the id from the route parameters (i.e. the url)
    // the route will be /dishdetail/X
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    // location service has a back function to use browser history
    this.location.back();
  }

}
