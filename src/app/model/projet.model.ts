import { Domaine } from "./domaine.model";

export class Projet {
  idProjet! : number;
  nomProjet! : string;
  manager! : string;
  cout! : number;
  startDate ! : Date ;
  domaine ! : Domaine;
  }
