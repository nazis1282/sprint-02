import { ProjetService } from './../services/projet.service';
import { Component } from '@angular/core';
import { Domaine } from '../model/domaine.model';
import { Projet } from '../model/projet.model';

@Component({
  selector: 'app-recherche-par-domaine',
  templateUrl: './recherche-par-domaine.component.html',
  styleUrl: './recherche-par-domaine.component.css'
})
export class RechercheParDomaineComponent {
  constructor(private projetService:ProjetService){}

  projets! : Projet[];
IdDomaine! : number;
domaines! : Domaine[];

ngOnInit(): void {
  this.projetService.listeDomaines().subscribe((doms: Domaine[]) => {
    this.domaines = doms;
    console.log(doms);
  });

}
onChange() {
  this.projetService.rechercherParDomaine(this.IdDomaine).
  subscribe(projs =>{this.projets=projs});
  }
}
