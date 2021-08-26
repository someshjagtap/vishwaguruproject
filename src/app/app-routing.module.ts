import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { UserRegisterComponent } from './module/user-register/user-register.component';
import { AuthGuard } from './guard/auth.guard';
import { UserComponent } from './shared/components/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: UserRegisterComponent
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
