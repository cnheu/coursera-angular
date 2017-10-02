import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // Declare dish CONST
  @Input()
  dish: Dish;
  // Declare comments list
  // comments = this.dish.comments;

  constructor() { }

  ngOnInit() {
  }

}
