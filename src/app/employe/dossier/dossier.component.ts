import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeService } from '../service/employe.service';



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
  allNature:any = [] ;
  allTerrain:any=[];
  allConstruction :any =[];

  today : number = Date.now();
  fFormGroup : FormGroup;
  proprietaire : prop []=[

  ];

  constructor(private _formBuilder: FormBuilder, private service :EmployeService) {}

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  fourthFormGroup : FormGroup;
  isEditable = true;



  ngOnInit() {
    this.getAllNature();
    this.getAllConstruction();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });;
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl : ['',Validators.required]
    });

  }
getAllNature(){
  this.service.getAllNature().subscribe((result)=>{
    console.log(result)
    this.allNature= result;
  })
}

getAllTerrain(){
  this.service.getAllTerrain().subscribe((result)=>{
    console.log(result)
    this.allTerrain=result

  })
}
getAllConstruction(){
  this.service.getAllConstruction().subscribe((result)=>{
    console.log(result)
    this.allConstruction=result

  })
}

}
