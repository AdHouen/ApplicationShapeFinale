import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-entrainement',
  templateUrl: './add-entrainement.component.html',
  styleUrls: ['./add-entrainement.component.css']
})
export class AddEntrainementComponent implements OnInit{

  declare form : FormGroup;

  declare exercices :any;


  constructor(
    private entrainementService: EntrainementService,
    private exerciceService:ExerciceService,
    private router : Router,
    private formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      entrainementId: ['', Validators.required],
      jour: ['', Validators.required],
      muscle: [''],
      exercice: ['', Validators.required],
      serie: [''],
      repetition: [''],
      poids: [''],
      recup: [''],
      temps: [''],
      distance: [''],
      uid: [''],
    })

    this.exerciceService.getAllExercices().subscribe(
      data => {
        // console.log(data);
        this.exercices = data;

      }
    );


  }
  create(){
    console.log(this.form.value);
    this.entrainementService.addEntrainement(this.form.value).subscribe(
      ()=> {
        this.router.navigate(['/entrainement'])
      }
    )

  }

  afficherExercice() {
    console.log("Coucou");

    // if (this.form.value.muscle == "Épaules") {
    //   this.epauleExo == false
    // }
    // if (this.form.value.muscle == "Biceps") {
    //   this.bicepsExo == false
    // }

    // this.epauleExo == false;
    // window.location.reload();

    }



}
