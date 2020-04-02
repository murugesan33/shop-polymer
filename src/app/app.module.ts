import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { FooterComponent } from './footer/footer.component';
import { LadiesoutwearComponent } from './ladiesoutwear/ladiesoutwear.component';
import { LadiesshirtsComponent } from './ladiesshirts/ladiesshirts.component';
import { MensoutwearComponent } from './mensoutwear/mensoutwear.component';
import { MenstshirtsComponent } from './menstshirts/menstshirts.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    LadiesoutwearComponent,
    LadiesshirtsComponent,
    MensoutwearComponent,
    MenstshirtsComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
