import { Router } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-entrainement',
  templateUrl: './add-entrainement.component.html',
  styleUrls: ['./add-entrainement.component.css']
})
export class AddEntrainementComponent implements OnInit{
  declare form : FormGroup;

  constructor(
    private entrainementService: EntrainementService,
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
  }
  create(){
    console.log(this.form.value);

    this.entrainementService.addEntrainement(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/entrainement'])
      }
    )



  }



}
