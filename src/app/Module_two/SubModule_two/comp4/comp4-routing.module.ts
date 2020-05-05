import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comp4Component } from './comp4.component';

const routes: Routes = [{ path: '', component: Comp4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp4RoutingModule { }
