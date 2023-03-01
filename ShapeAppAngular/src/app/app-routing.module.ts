import { UploadFileComponent } from './components/user/gallerie/upload-file/upload-file.component';
import { Routes, RouterModule } from '@angular/router';
import { AddEntrainementComponent } from './components/user/entrainement/add-entrainement/add-entrainement.component';
import { ListEntrainementComponent } from './components/user/entrainement/list-entrainement/list-entrainement.component';
import { ExerciceComponent } from './components/user/exercice/exercice.component';
import { GraphiqueComponent } from './components/user/graphique/graphique.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { NgModule } from '@angular/core';


const routes: Routes = [

  {path: 'bmi',component:CalculBmiComponent},// IMC
  {path: 'graphique',component:GraphiqueComponent},// Graphique
  {path: 'exercice',component:ExerciceComponent},// Exercice
  {path: 'entrainement' ,component:ListEntrainementComponent },// Entrainement
  {path: 'addEntrainement' ,component:AddEntrainementComponent },// Ajouter un entrainement
  {path: 'galerie' ,component:UploadFileComponent },// Galerie

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
