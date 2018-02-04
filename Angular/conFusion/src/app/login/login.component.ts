import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // define user variable, to bind template form elements to
  user = {username: '', password: '', remember: false};

  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  // onSubmit which is called when the form is submitted
  onSubmit() {
    console.log("User: ", this.user);
    this.dialogRef.close();
  }

}
