import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './layouts/home/home.component';
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
 {path:'', redirectTo:'/home', pathMatch:'full'},
 {path:'home', component:LayoutComponent, children: [
   {path:'', component:HomeComponent},
   {path:'login', component:LoginComponent},
   {path:'register', component:RegisterComponent},
   {path:'checkout', component:CheckoutComponent},
   {path:'shopping-cart', component:ShoppingCartComponent},
   {path:'product', component:ProductComponent},
   {path:'shop', component:ShopComponent},
   {path:'contact', component:ContactComponent},
 ]},
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
