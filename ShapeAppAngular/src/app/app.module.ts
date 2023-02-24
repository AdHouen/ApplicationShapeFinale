import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { GraphiqueComponent } from './components/user/graphique/graphique.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculBmiComponent,
    GraphiqueComponent
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
