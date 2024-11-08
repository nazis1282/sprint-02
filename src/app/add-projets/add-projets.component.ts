import { ProjetService } from './../services/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Domaine } from '../model/domaine.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-projets',
  templateUrl: './add-projets.component.html',
  styleUrl: './add-projets.component.css'
})
export class AddProjetsComponent implements OnInit{
  domaines! : Domaine[]
  newIdDom! : number;
  newDomaine! : Domaine;
  constructor(private projetService: ProjetService,
              private router : Router) { }
  ngOnInit()  {
    this.projetService.listeDomaines().subscribe(doms =>{this.domaines =doms})
  }
  newProjet = new Projet();

  addProjet() {
    this.newProjet.domaine = this.domaines.find(dom => dom.idDom ==this.newIdDom)!;
    this.projetService.ajouterProjet(this.newProjet).subscribe(proj =>{
    this.router.navigate(['projets'])})
  }


}
