import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import 'rxjs/add/operator/switchmap';
import { Comment } from '../shared/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  commentForm: FormGroup;
  comment: Comment;

  formErrors = {
    'author': '',
    'comment': '',

    // 'lastname': '',
    // 'telnum': '',
    // 'email': ''
  };



  validationMessages = {
    'author': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'First Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'First Name cannot be more than 25 characters long.'
    },
    // 'lastname': {
    //   'required':      'Last Name is required.',
    //   'minlength':     'Last Name must be at least 2 characters long.',
    //   'maxlength':     'Last Name cannot be more than 25 characters long.'
    // },
    // 'telnum': {
    //   'required':      'Tel. number is required.',
    //   'pattern':       'Tel. number must contain only numbers.'
    // },
    // 'email': {
    //   'required':      'Email is required.',
    //   'email':         'Email not in valid format.'
    // },
  };

  // dish value is no longer available from the dish component
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
      this.createForm();
    }

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
        // resetting the next and prev ids everytime the page gets updated
        this.dish = dish;
        this.setPrevNext(dish.id)
      });
  }

  createForm(): void {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      comment: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating: 5,
      date: '',
      // lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      // telnum: ['', [Validators.required, Validators.pattern] ],
      // email: ['', [Validators.required, Validators.email] ],
      // agree: false,
      // contacttype: 'None',
      // message: ''
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }

  // copypasted from contact.component.ts
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    // Set today's date and format it
    var today = new Date().toDateString().slice(4);

    // Add today to the form model
    this.commentForm.value.date = today;
    this.comment = this.commentForm.value;

    // Push the form model to data model
    this.dish.comments.push(this.comment);
    console.log(this.dish.comments);

    // Reset form model
    // BUG: validation should only appear if it's been changed by someone
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5,
      date: '',
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
