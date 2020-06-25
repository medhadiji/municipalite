import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface natureDossier{
  value: string;
  viewValue: string;
}
export interface TypeConstruction{
  value: string;
  viewValue: string;
}
export interface prop{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  isLinear = false;

  today : number = Date.now();
  fFormGroup : FormGroup;
  proprietaire : prop []=[

  ];
   nature: natureDossier[] = [
    {value: 'n1', viewValue: 'permis de bâtir'},
    {value: 'n2', viewValue: 'autorisation des travaux dans la voix public'},

  ];
  type : TypeConstruction[]=[
    {value : 't1',viewValue : 'Individuel'},
    {value : 't2',viewValue: 'Collectif'}
  ]
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  fourthFormGroup : FormGroup;
  isEditable = true;



  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl : ['',Validators.required]
    });

  }
}
