import { NgModule, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp4RoutingModule } from './comp4-routing.module';
import { Comp4Component } from './comp4.component';
import { Comp1Module } from 'src/app/Module_one/SubModule_one_1/comp1/comp1.module';




@NgModule({
  declarations: [Comp4Component],
  imports: [
    CommonModule,
    Comp4RoutingModule,
    Comp1Module
  ]
})
export class Comp4Module {
 

 }
