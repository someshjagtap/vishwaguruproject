import { Component, OnInit, Optional, Inject, AfterViewInit} from '@angular/core';

// import { EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormControl, FormGroup } from '@angular/forms';




export interface UserList {
  id: number;
  name: string;
  email: string;
  password: string;
}



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit, AfterViewInit {

  action:string;
  local_data: any;

  ngOnInit(): void {
    
  }

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserList) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  ngAfterViewInit(): void {
    
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  // @Output() newuserdata = new EventEmitter<string>();

  // checkoutForm = new FormGroup({
  //     name: new FormControl(''),
  //     id: new FormControl(''),
  //     age: new FormControl(''),
  //     contact: new FormControl('')
  //   })

  // onSubmit(): void {
  //   // Process checkout data here
  //   console.log(this.checkoutForm.value);
  //   this.newuserdata.emit(this.checkoutForm.value);
  // }

  // constructor(public dialog: MatDialog) {}

  //  closeDialog(){
  //    this.dialog.closeAll();
  //  }

  

  

}
