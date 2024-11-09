import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path :'home', component: HomeComponent},
    {path :'dashboard', component:DashboardComponent},
    {path : 'header', component : HeaderComponent}
];
