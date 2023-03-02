import { UploadFileComponent } from './components/user/gallerie/upload-file/upload-file.component';
import { ExerciceComponent } from './components/user/exercice/exercice.component';
import { AddEntrainementComponent } from './components/user/entrainement/add-entrainement/add-entrainement.component';
import { ListEntrainementComponent } from './components/user/entrainement/list-entrainement/list-entrainement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculBmiComponent } from './components/user/calcul-bmi/calcul-bmi.component';
import { GraphiqueComponent } from './components/user/graphique/graphique.component';

import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CommonModule } from '@angular/common';
import { ListGallerieComponent } from './components/user/gallerie/list-gallerie/list-gallerie.component';
import { GallerieImageComponent } from './components/user/gallerie/gallerie-image/gallerie-image.component';



/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};




@NgModule({
  declarations: [
    AppComponent,
    CalculBmiComponent,
    GraphiqueComponent,
    ExerciceComponent,
    ListEntrainementComponent,
    AddEntrainementComponent,
    ListGallerieComponent,
    UploadFileComponent,
    GallerieImageComponent,





  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
