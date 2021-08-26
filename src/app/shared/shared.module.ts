import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { DialogsModule } from '../dialogs/dialogs.module';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    RegistrationformComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,MatDividerModule,MatSidenavModule,MatListModule,
    MatCardModule,MatTabsModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,FormsModule,
    MatTableModule,MatMenuModule,
    DialogsModule,HttpClientModule,MatPaginatorModule,MatSortModule,MatProgressSpinnerModule,MatCheckboxModule
  ],
  exports: [
    RegistrationformComponent,UserComponent
  ],
})
export class SharedModule { }
