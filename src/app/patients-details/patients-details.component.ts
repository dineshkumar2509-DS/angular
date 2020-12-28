import { Component, OnInit } from '@angular/core';
import { details } from "../patientdetails";

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
})
export class PatientsDetailsComponent implements OnInit {

  constructor() { }

  details: any;
  panelOpenState = false;


  ngOnInit(): void {
    this.details = details;
  }

}
