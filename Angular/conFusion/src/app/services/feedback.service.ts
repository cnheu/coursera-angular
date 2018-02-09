import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
// import { Observable } from 'rxjs/Observable';

import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback) {
    console.log('in feedback');
    // var feedbackStub: Feedback;
    // feedbackStub = {
    //     firstname: 'test',
    //     lastname: 'test',
    //     telnum: 123,
    //     email: 'test',
    //     agree: true,
    //     contacttype: 'test',
    //     message: 'test',
    //   };

    // this.restangular.all('feedback').post(feedbackStub)


    this.restangular.all('feedback').post(feedback);

    return;
  }
}
