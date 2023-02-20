import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     // BMI
     {
      path: 'bmi',
      component:CalculBmiComponent

    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
