import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserRegisterComponent } from 'src/app/module/user-register/user-register.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UserRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    
  ],

})
export class DefaultModule { }
