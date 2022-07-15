import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthGuard } from './auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { LoginComponent } from './login/login.component';
import { PrimedropdownComponent } from './primedropdown/primedropdown.component';
import { PrimengtabviewComponent } from './primengtabview/primengtabview.component';
import { TablegridlineComponent } from './tablegridline/tablegridline.component';

const routes: Routes = [
  {path:'dropdown', component:DropdownComponent},
  {path:'login' , component: LoginComponent,},
  {path:'dashboard' , component: DashboardComponent,canActivate:[AuthGuard]},   //if canactive is true then the user can access the routes

  {path:'tablegridline', component:TablegridlineComponent},
  {path:'primedropdown', component:PrimedropdownComponent},
  {path:'primetabview', component:PrimengtabviewComponent},

  {path:'listemployee', component:ListemployeeComponent},
  {path:'addemployee', component:AddemployeeComponent},
  {path:'editemployee/:eid', component:EditemployeeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

