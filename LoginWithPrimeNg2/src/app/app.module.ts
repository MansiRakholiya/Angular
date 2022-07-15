import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { Service1Service } from './service1.service';
import { TablegridlineComponent } from './tablegridline/tablegridline.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimedropdownComponent } from './primedropdown/primedropdown.component';
import { PrimengtabviewComponent } from './primengtabview/primengtabview.component';
import {TabViewModule} from 'primeng/tabview';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TablegridlineComponent,
    DropdownComponent,
    LoginComponent,
    DashboardComponent,
    PrimedropdownComponent,
    PrimengtabviewComponent,
    ListemployeeComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    TabViewModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Service1Service,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
