import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


import { DataserviceService } from '../services/dataservice.service';
import { IstateDistrict } from '../services/statedistrict';
import { SyptomsComponent } from '../syptoms/syptoms.component';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  sdList: IstateDistrict[] = [];
  states: string[] = [];
  district: string[] = [];
  errmsg: String = '';
  pateientForm!: FormGroup;
  stateName: string | undefined;
  public age: number = 0;
  dialogRef?: MatDialogRef<SyptomsComponent>;
  symptomsArray!:[];
  temp?:[];

  constructor(private sdService: DataserviceService,
    private dialog: MatDialog,
    private fb: FormBuilder) { }

  populateState(sdObj: IstateDistrict[]) {
    let temp = JSON.parse(JSON.stringify(sdObj));
    temp.states.forEach((item: any) => {
      this.states.push(item.state);
    })
    console.log(this.states);
  }

  onSubmit() {
    
  }

  selectDistrict(event: any): void {
    let temp = JSON.parse(JSON.stringify(this.sdList));
    this.district = temp.states[event].districts;
  }

  calcAge(event: any) {
    if (event) {
      var timeDiff = Math.abs(Date.now() - event.getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    console.log(this.age);
  }

  onReset(){
    this.pateientForm.reset();
  }

  // check() {
  //   console.log(this.pateientForm.controls);
  // }

  openSymptoms() {
    this.dialogRef=this.dialog.open(SyptomsComponent, {
      autoFocus: true,
      disableClose: true,
      data: {
        name: this.pateientForm.controls.firstName.value
      }
    });
    this.dialogRef.afterClosed().subscribe(result=>{
      this.symptomsArray=result;
    });
  }

  ngOnInit(): void {
    this.sdService.getData().subscribe({
      next: items => {
        this.sdList = items;
        this.populateState(this.sdList)
      },
      error: err => this.errmsg = err
    });

    this.pateientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required]
    })

  }

}
