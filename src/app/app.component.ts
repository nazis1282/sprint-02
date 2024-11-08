import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'MesProjet2';

  constructor(public authService: AuthService, private router: Router) {}


  ngOnInit () {
    this.authService.loadToken();
    if (this.authService.getToken()==null || this.authService.isTokenExpired())
    this.router.navigate(['/login']);
    }

    onLogout(){
      return this.authService.logout();
    }

}
