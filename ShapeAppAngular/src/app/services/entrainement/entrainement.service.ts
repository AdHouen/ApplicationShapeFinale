import { Observable } from 'rxjs';
import { Entrainement } from './../../models/entrainement/entrainement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService {

  private host = environment.apiUrl;
  constructor(private http: HttpClient) {


  }

   /*On récupère les entrainements du backend via l'URL /entrainements */
   public getAllEntrainements() : Observable<Entrainement[]>{
    return this.http.get<Entrainement[]>(`${this.host}/entrainements`)
  }

  /* FormData injecte les données via un form Data voir dans postman (formulaire); il faut une key et une value */
  public addEntrainement(formData: FormData) : Observable<Entrainement>{
    return this.http.post<Entrainement>(`${this.host}/entrainements`, formData)
  }

  /* FormData inject les donées a modifier via un formulaire (voir dans PostMan section FormData pour les tests) Attention il est possible de rencontrer une erreur plusieurs champs sont required pour le update() */
  public updateEntrainement(formData: FormData) : Observable<Entrainement>{
    return this.http.post<Entrainement>(`${this.host}/entrainements`, formData)
  }

  /* I delete un entrainement */
  public deleteEntrainement(entrainementId: number) : Observable< Entrainement >{
    return this.http.delete<Entrainement>(`${this.host}/entrainements/${entrainementId}`);
  }
}
