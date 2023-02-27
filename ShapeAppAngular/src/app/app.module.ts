import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { GraphiqueComponent } from './components/user/graphique/graphique.component';
import { ExerciceComponent } from './components/user/exercice/exercice.component';
import { ListEntrainementComponent } from './components/user/entrainement/list-entrainement/list-entrainement.component';
import { AddEntrainementComponent } from './components/user/entrainement/add-entrainement/add-entrainement.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculBmiComponent,
    GraphiqueComponent,
    ExerciceComponent,
    ListEntrainementComponent,
    AddEntrainementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
