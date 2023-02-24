import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AgencyComponent } from './agency/agency.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './helpers/material.module';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderReportComponent } from './orders/order-report/order-report.component';
import { LoginComponent } from './login/login.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './helpers/date-format';
import { DialogDetailOrderComponent } from './orders/order-list/dialog-detail-order/dialog-detail-order.component';
import { DialogDetailAgencyComponent } from './agency/dialog-detail-agency/dialog-detail-agency.component';
import { DialogDetailProductComponent } from './products/dialog-detail-product/dialog-detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    AgencyComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderReportComponent,
    LoginComponent,
    SublevelMenuComponent,
    PageNotFoundComponent,
    LogoutComponent,
    DialogDetailOrderComponent,
    DialogDetailAgencyComponent,
    DialogDetailProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: DateAdapter, useClass: DateFormat }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-in");
  }
}
