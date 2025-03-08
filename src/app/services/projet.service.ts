import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Domaine } from '../model/domaine.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'

})
export class ProjetService {
  apiURL: string = 'http://localhost:8080/projets/api';

  projet!: Projet;
  projets!: Projet[]; //un tableau de chînes de caractères
  domaines!: Domaine[];
  constructor(private http: HttpClient,
    private authService: AuthService
  ) {
    /* this.domaines = [{idDom : 1, nomDom : "informatique"},{idDom : 2, nomDom : "industrielle"}]
     this.projets = [
       {idProjet : 1, nomProjet : "residance", manager :"sami" , cout : 3000.600, startdate : new Date("01/14/2011"), domaine :{idDom : 1, nomDom : "informatique"}},
       {idProjet : 2, nomProjet : "residance", manager :"sami" , cout : 3000.600, startdate : new Date("01/14/2011"), domaine :{idDom : 1, nomDom : "informatique"}},
       {idProjet : 3, nomProjet : "residance", manager :"sami" , cout : 3000.600, startdate : new Date("01/14/2011"), domaine :{idDom : 1, nomDom : "informatique"}},
        ];*/
  }


  listeProjets(): Observable<Projet[]> {

    return this.http.get<Projet[]>(this.apiURL+"/all");
  }
  ajouterProjet(proj: Projet): Observable<Projet> {
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Projet>(this.apiURL+"/addproj", proj,{headers:httpHeaders});
  }

  supprimerProjet(id: number) {
    const url = `${this.apiURL}/delproj/${id}`;
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
    //ou Bien
    /* this.projets.forEach((cur, index) => {
    if(proj.idProjet === cur.idProjet) {
    this.projets.splice(index, 1);
    }
    }); */
  }

  consulterProjet(id: number): Observable<Projet> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Projet>(url,{headers:httpHeaders});
  }

  trierProjets() {
    this.projets = this.projets.sort((n1, n2) => {
      if (n1.idProjet! > n2.idProjet!) {
        return 1;
      }
      if (n1.idProjet! < n2.idProjet!) {
        return -1;
      }
      return 0;
    });
  }

  updateProjet(proj: Projet): Observable<Projet> {
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Projet>(this.apiURL+"/updateproj", proj, {headers:httpHeaders});
  }


  listeDomaines(): Observable<Domaine[]> {
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Domaine[]>(this.apiURL + "/dom",{headers:httpHeaders});
  }

  consulterDomaine(id: number): Domaine {
    return this.domaines.find(dom => dom.idDom == id)!;
  }

  rechercherParDomaine(idDom: number): Observable<Projet[]> {
    const url = `${this.apiURL}/projsdom/${idDom}`;
    return this.http.get<Projet[]>(url);
    }

}

