import { Entrainement } from './../../../../models/entrainement/entrainement';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute } from '@angular/router';
import { Exercice } from './../../../../models/exercice/exercice';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { MuscleService } from './../../../../services/muscle/muscle.service';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { Component, OnInit } from '@angular/core';
import { Muscle } from 'src/app/models/muscle/muscle';

@Component({
  selector: 'app-list-entrainement',
  templateUrl: './list-entrainement.component.html',
  styleUrls: ['./list-entrainement.component.css']
})
export class ListEntrainementComponent implements OnInit {

  declare muscles : Muscle [];
  declare exercices : Exercice[];
  declare entrainements : any;
  public editEntrainement = new Entrainement() ;


  constructor(
    private exerciceService : ExerciceService,
    private muscleService : MuscleService,
    private entrainementService : EntrainementService,
    private router : Router,
    private route : ActivatedRoute,
    private notifier: NotifierService,

  ){

  }




  ngOnInit(): void {
    this.getMuscles();
    this.getExercices();
    this.getEntrainements();

    if (this.route.snapshot.paramMap.get('id') != null) {
      this.removeEntrainement();
      this.router.navigate(['/entrainement']);

    }


  }
  getMuscles() {
    this.muscleService.getAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles=data;

      }
    )
  }
  getExercices() {
    this.exerciceService.getAllExercices().subscribe(
      data => {
        console.log(data);
        this.exercices=data;

      }
    )
  }
  getEntrainements() {
    this.entrainementService.getAllEntrainements().subscribe(
      data => {
        console.log(data);
        this.entrainements=data;

      }
    )
  }

  removeEntrainement() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entrainementService.deleteEntrainement(id).subscribe(
      () => {

      this.notifier.notify('success', 'Votre entrainement à été supprimé avec succès');

      }
    )
  }

  // Méthode pour éditer un utilisateur
  public onEditEntrainement(editEntrainement : Entrainement) {
    this.editEntrainement = editEntrainement;

    this.clickButton('openEntrainementEdit');
  }

  // Méthode générale pour le click des boutons
  private clickButton(buttonId : string): void{
    document.getElementById(buttonId)?.click();
  }



}
