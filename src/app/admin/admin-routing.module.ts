import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoComponent } from './components/demo/demo.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', redirectTo:'/dashboard', pathMatch:'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'demo', component: DemoComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
