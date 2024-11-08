import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { ProjetService } from '../services/projet.service';
import { Domaine } from '../model/domaine.model';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrl: './update-projet.component.css'
})
export class UpdateProjetComponent implements OnInit{
  domaines! : Domaine[];
  updatedDomId! : number;
  currentProjet = new Projet();
  constructor(private activatedRoute: ActivatedRoute,
  private projetService: ProjetService,
  private router : Router) { }
  ngOnInit() {
    this.projetService.listeDomaines().subscribe(doms => {this.domaines = doms;});
    this.projetService.consulterProjet(this.activatedRoute.snapshot.params['id']).
    subscribe( proj =>{ this.currentProjet = proj;
                        this.updatedDomId =this.currentProjet.domaine.idDom;
    } ) ;
  }
  updateProjet()
{
this.currentProjet.domaine = this.domaines.find(dom => dom.idDom ==this.updatedDomId)!;
this.projetService.updateProjet(this.currentProjet).subscribe(proj =>{
this.router.navigate(['projets']);}
);

}

  }


