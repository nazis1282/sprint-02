import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetsComponent } from './add-projets/add-projets.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProjetGuard } from './projet.guard';

const routes: Routes = [
  {path: "projets", component : ProjetsComponent},
  {path: "add-projet", component : AddProjetsComponent, canActivate:[ProjetGuard]},
  {path: "updateProjet/:id", component: UpdateProjetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "projets", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
