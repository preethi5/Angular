import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormGroup, FormControl, Validators,FormsModule,FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IMultiSelectOption,IMultiSelectTexts  } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    NgMultiSelectDropDownModule.forRoot()   
  ]})

export class MyFormComponent implements OnInit {
  myForm : FormGroup;
  fname: string = '';
  lname: string = '';
  email : string = '';
  pwd: string = '';
  country:string[];
  gender: string = '';
  address: string = '';
  accept: boolean = false;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() {
   }
   
submitForm(values){
this.email = values.email;
this.pwd = values.pwd;
this.fname = values.fname;
this.lname = values.lname;
this.country = values.country;
  }
  ngOnInit() {
    this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
// this.selectedItems = [
//         {"id":2,"itemName":"Singapore"},
//         {"id":3,"itemName":"Australia"},
//         {"id":4,"itemName":"Canada"},
//         {"id":5,"itemName":"South Korea"}
//     ];
this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Countries",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };
        
    this.myForm = new FormGroup({
      fname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      lname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      pwd: new FormControl('',[Validators.required,Validators.minLength(6)]),
      country: new FormControl([],Validators.required),
      gender: new FormControl('',Validators.required),
      address: new FormControl('',[Validators.required,Validators.minLength(20),Validators.minLength(50)]),
    })
  }
onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}  
}
