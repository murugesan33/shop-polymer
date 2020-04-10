import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LadiesoutwearComponent } from './ladiesoutwear/ladiesoutwear.component'
import {LadiesshirtsComponent} from './ladiesshirts/ladiesshirts.component';
import {MensoutwearComponent} from './mensoutwear/mensoutwear.component';
import {MenstshirtsComponent} from './menstshirts/menstshirts.component';
import { DetailsComponent } from './details/details.component';





const routes: Routes = [
  {path:'menswear',component: MensoutwearComponent},
  {path:'login',component: LoginComponent},
  {path:'',  redirectTo: 'home',  pathMatch: 'full'},
  {path:'register',component:RegisterComponent},
  {path:'ladieswear',component:LadiesoutwearComponent},
  {path:'menshirts',component:MenstshirtsComponent},
  {path:'ladieshirts',component:LadiesshirtsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
