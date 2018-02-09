import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
// import { Observable } from 'rxjs/Observable';

import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback) {
    console.log('In Feedback Service');
    this.restangular.all('feedback').post(feedback);
    return;
  }
}
