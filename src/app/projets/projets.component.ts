import { ProjetService } from './../services/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements OnInit {

  constructor(private projetService : ProjetService,
    public authService: AuthService) { }

  projets!: Projet[]; //un tableau de chînes de caractères
 

    ngOnInit(): void {
      this.chargerProjets();
    }

    chargerProjets(){
      this.projetService.listeProjets().subscribe(projs => {
        console.log(projs);
        this.projets = projs;
        });
    }
    supprimerProjet(p: Projet)
 {
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.projetService.supprimerProjet(p.idProjet).subscribe(()=>{
  console.log("projet supprimé");
  this.chargerProjets();});
 }

}
