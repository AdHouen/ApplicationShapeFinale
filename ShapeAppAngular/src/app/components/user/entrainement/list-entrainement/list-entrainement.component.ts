import { Exercice } from './../../../../models/exercice/exercice';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private exerciceService : ExerciceService,
    private muscleService : MuscleService,
    private entrainementService : EntrainementService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }




  ngOnInit(): void {
    this.getMuscles();
    this.getExercices();
    this.getEntrainements();


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

}
