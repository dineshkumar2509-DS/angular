import { Component, OnInit } from '@angular/core';
import { details } from "../patientdetails";

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  constructor() { }
  panelOpenState=false;
  details!:any;

  ngOnInit(): void {
    this.details=[details[details.length-1]];
  }

}
