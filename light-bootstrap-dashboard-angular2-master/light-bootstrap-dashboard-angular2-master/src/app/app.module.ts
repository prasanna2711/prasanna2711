import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { BrowserModule } from '@angular/platform-browser';
import { TestServerComponent } from './test-server/test-server.component';
import { LiveServerComponent } from './live-server/live-server.component';
import { BaseLineTestServerComponent } from './base-line-test-server/base-line-test-server.component';
import { BaseLineLiveServerComponent } from './base-line-live-server/base-line-live-server.component';
import { DailyDataComponent } from './daily-data/daily-data.component';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
      FormsModule, ReactiveFormsModule,BrowserModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
