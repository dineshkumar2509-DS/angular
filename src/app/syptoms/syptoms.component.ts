import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-syptoms',
  templateUrl: './syptoms.component.html',
  styleUrls: ['./syptoms.component.css']
})
export class SyptomsComponent implements OnInit {

  symptoms!: FormGroup;
  save = false;
  singleRow = true;
  symptomsArray = [
    { value: "fever", used: false },
    { value: "pain", used: false },
    { value: "headache", used: false }
  ]

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private dialogRef: MatDialogRef<SyptomsComponent>) {
  }


  get symptomsList(): FormArray {
    return (this.symptoms.get('symptoms_List') as FormArray);
  }

  get symptomsControl() {
    return (this.symptoms.controls);
  }

  newSypmtopms(): FormGroup {
    return (this.fb.group({
      symptomsType: ['', Validators.required],
      numberOfDays: ['', Validators.required],
      isEditable: [true]
    }));
  }

  addRow() {
    if (this.singleRow) {
      this.singleRow = !this.singleRow;
      this.symptomsList.push(this.newSypmtopms());
    }
  }

  onSubmit() {
  }

  onDone(group: any) {
    this.disableDropDown(group)
    group.controls.isEditable.setValue(false);
    this.singleRow = !this.singleRow;
  }

  onDel(i: number) {
    this.symptomsList.removeAt(i);
    this.singleRow=!this.singleRow;
  }

  disableDropDown(group: any) {
    this.symptomsArray.forEach((element, index) => {
      if (element.value == group.controls.symptomsType.value) {
        this.symptomsArray[index].used = !this.symptomsArray[index].used;
      }
    });
  }

  onEdit(group: any) {
    if (this.singleRow) {
      this.disableDropDown(group);
      group.controls.isEditable.setValue(true)
      this.singleRow=!this.singleRow;
    }
  }

  onClose() {
    console.log(this.symptomsList.value);
    this.dialogRef.close(this.symptomsList.value);
  }

  ngOnInit(): void {
    this.symptoms = this.fb.group({
      symptoms_List: this.fb.array([])
    });
    this.addRow();
  }
}
