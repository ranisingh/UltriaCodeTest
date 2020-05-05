import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comp3Component } from './comp3.component';

const routes: Routes = [{ path: '', component: Comp3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp3RoutingModule { }
