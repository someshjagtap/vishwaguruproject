import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialogs/dialog-box/dialog-box.component';
import { UserService } from 'src/app/service/user/user.service';
import { UserList } from 'src/app/model/userList';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  message !:number;
  subscription !: Subscription;
  count: UserList[]= [];
  ELEMENT_DATA!: UserList[];
  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'action'];
  dataSource = new MatTableDataSource<UserList>(this.ELEMENT_DATA);

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
      this.getUserDetails();
      this.subscription = this.service.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    //this.service.changeMessage("Hello from Sibling")
  }

  getUserDetails() {
    this.service.getUser()
      .subscribe(res =>{
        this.dataSource.data = res;
        this.count= res;
        this.service.changeMessage(this.count.length)
      })
  }

  constructor(public dialog: MatDialog, private service: UserService) { }

 
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

  addRowData(row_obj: { id: any; name: string; email: string; password: string; }) {
    // var d = new Date();
    this.service.postUser({
      id: row_obj.id,
      name: row_obj.name,
      email: row_obj.email,
      password: row_obj.password
    })
    .subscribe(res => {
      console.log(res);
      alert("User Added Successfully");
      this.getUserDetails()
      return res;
    },
      err => {
        alert("Something Went Wrong")
      })
    
    console.log(this.dataSource.data);
  }
  updateRowData(row_obj: { id: number; name: string; email: string; password: string; }) {

    this.service.updateUser(row_obj, row_obj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        this.getUserDetails();
        return res;
      })
  }


  deleteRowData(row_obj: { id: number; }) {
    this.service.deleteUser(row_obj.id)
      .subscribe(res => {
        alert("User Deleted Successfully")
        this.getUserDetails();
        return res;
      })
  }

  // Search User from table

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Following code filter only name field of table
    // this.dataSource.filterPredicate = (data:
    //   { name: string }, filterValue: string) => data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
    this.dataSource.filter = filterValue;
  }

  
}
