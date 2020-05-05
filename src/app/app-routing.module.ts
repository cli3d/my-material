import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TeamsComponent } from './teams/teams.component';



const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "product", component: ProductComponent},
  {path: "teams", component: TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
