import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetsComponent } from './add-projets/add-projets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RechercheParDomaineComponent } from './recherche-par-domaine/recherche-par-domaine.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AddProjetsComponent,
    UpdateProjetComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParDomaineComponent,
    RechercheParNomComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
