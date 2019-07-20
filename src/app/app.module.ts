import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { StatsCardComponent } from './views/dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './views/dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { HelpComponent } from './views/help/help.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    ModalsComponent,
    HelpComponent,
    Profile1Component,
    BasicTableComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
