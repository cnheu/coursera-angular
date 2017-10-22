import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // define user variable, to bind template form elements to
  user = {remember:false};

  constructor() { }

  ngOnInit() {
  }

}
