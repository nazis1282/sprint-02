import { Component } from '@angular/core';
import { User } from '../model/user.modal';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  erreur=0;
  user = new User();
  err:number = 0;


  constructor(private authService : AuthService,
    private router: Router) { }

    onLoggedin() {
      this.authService.login(this.user).subscribe(
        (data) => {
          const jwToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwToken);
          this.router.navigate(['/']);
        },
        (erreur) => {
          this.err = 1;
        }
      );
    }



}
