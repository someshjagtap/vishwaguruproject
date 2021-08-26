
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { DialogBoxComponent } from 'src/app/dialogs/dialog-box/dialog-box.component';
import { userlist } from './userlist.model';
import { UserlistService } from './userlist.service';




@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public dialog: MatDialog, private userlistservice: UserlistService) {}

  ngOnInit(): void {
    
  }
  ELEMENT_DATA: userlist[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  dataSource = new MatTableDataSource<userlist>(this.ELEMENT_DATA);

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: { id: any; name: any;  email: any; password: string; }) {
    // var d = new Date();

    this.dataSource.data.push({
      id: row_obj.id,
      name: row_obj.name,
      email: row_obj.email,
      password: row_obj.password,
    });
    console.log(this.dataSource.data);
    // this.table.renderRows();

    // this.service.postUser(this.ELEMENT_DATA)
    // .subscribe((res: any)=>{

    //   console.log(res)
    //   alert("User Added Successfully")
    // },
    // err=>{
    //   alert("Something went Wrong")
    // })

  }
  updateRowData(row_obj: { id: number; name: string;  email: string; password: string; }) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.id = row_obj.id;
        value.name = row_obj.name;
        value.email = row_obj.email;
        value.password = row_obj.password;
      }
      return true;
    });
  }


  deleteRowData(row_obj: { id: number; }) {

    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id != row_obj.id;
    });
    console.log(this.dataSource.data)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Following code filter only name field of table
    // this.dataSource.filterPredicate = (data:
    //   { name: string }, filterValue: string) => data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
    this.dataSource.filter = filterValue;
  }


}


