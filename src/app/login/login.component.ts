import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login;
  userReturn: any;

  constructor(private loginService: LoginService, private route: Router) {
    this.userLogin= new Login("", "");
   }

  ngOnInit() {
  }

  
  login() {
    console.log("test", this.userLogin);
    this.loginService.login(this.userLogin).subscribe(user => {
      this.userReturn=user;
      switch (this.userReturn.userType) {
        case "Administrateur":
            this.route.navigate(['/admin']);
          break;
        case "Conseiller":
            this.route.navigate(['/conseillers']);
            break;
        case "Client":
             this.route.navigate(['/clients']);
             break;
        default:
            this.route.navigate(['/login']);
      }
    })
  }
}
