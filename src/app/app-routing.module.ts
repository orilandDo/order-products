import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderReportComponent } from './orders/order-report/order-report.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AgencyComponent } from './agency/agency.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,  },//canActivate: [AuthGuardGuard]
  { path: 'orders', children: [
    { path: 'list', component: OrderListComponent, canActivate: [AuthGuardGuard] },
    { path: 'create', component: OrderCreateComponent, canActivate: [AuthGuardGuard] },
    { path: 'report', component: OrderReportComponent, canActivate: [AuthGuardGuard] },
  ]}, 
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuardGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuardGuard] },
  { path: 'agency', component: AgencyComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
