import { Router, ActivatedRoute } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { Entrainement } from './../../../../models/entrainement/entrainement';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-entrainement',
  templateUrl: './edit-entrainement.component.html',
  styleUrls: ['./edit-entrainement.component.css']
})
export class EditEntrainementComponent implements OnInit{
  declare editForm : FormGroup;
  declare entrainement : Entrainement;

  constructor(
    private entrainementService : EntrainementService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,

  ){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
