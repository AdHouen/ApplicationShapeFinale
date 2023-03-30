import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public showLoading: boolean;

  constructor(
    private router : Router,


  ){
    this.showLoading = false;

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
