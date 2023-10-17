import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomersEditComponent } from './pages/customers/customers-edit/customers-edit.component';
import { CustomersFormComponent } from './pages/customers/customers-form/customers-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomersComponent,
    NavbarComponent,
    CustomersListComponent,
    HomeComponent,
    CustomersEditComponent,
    CustomersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
