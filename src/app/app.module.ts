import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetsComponent } from './add-projets/add-projets.component';
import { FormsModule } from '@angular/forms';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AddProjetsComponent,
    UpdateProjetComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
