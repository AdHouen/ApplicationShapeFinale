import { GraphiqueComponent } from './components/user/graphique/graphique.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'bmi',component:CalculBmiComponent},// IMC
  {path: 'graphique',component:GraphiqueComponent},// Graphique
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
