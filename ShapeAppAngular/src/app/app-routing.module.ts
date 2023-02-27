import { AddEntrainementComponent } from './components/user/entrainement/add-entrainement/add-entrainement.component';
import { ListEntrainementComponent } from './components/user/entrainement/list-entrainement/list-entrainement.component';
import { ExerciceComponent } from './components/user/exercice/exercice.component';
import { GraphiqueComponent } from './components/user/graphique/graphique.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'bmi',component:CalculBmiComponent},// IMC
  {path: 'graphique',component:GraphiqueComponent},// Graphique
  {path: 'exercice',component:ExerciceComponent},// Exercice
  {path: 'entrainement' ,component:ListEntrainementComponent },// Entrainement
  {path: 'addEntrainement' ,component:AddEntrainementComponent },// Ajouter un entrainement

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
