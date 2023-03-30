import { AuthenticationService } from './../../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public showLoading: boolean = false;
  private subscriptions: Subscription [] = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notifier: NotifierService,
    )
    { }

    ngOnInit(): void {



    }
    ngOnDestroy(): void {

    }
    public onRegister(): void{
      // this.showLoading = true;
      // console.log(user);

      // this.subscriptions.push(this.authenticationService.register(user).subscribe(
      //   (response: User)=>  {

      //     console.log("Je suis dans Register", response.firstname);

      //     this.showLoading = false;
      //     this.sendNotification(NotificationType.SUCCESS, `Votre compte a bien été crée ${response.username}`);

      //   },
      //   (errorResponse: HttpErrorResponse) => {
      //       console.log(errorResponse);
      //       this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
      //       this.showLoading = false;
      //   }
      //   )
      // )

    }

}
