import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', redirectTo: 'comp1', pathMatch: 'full' },
{ path: 'comp1', loadChildren: () => import('./Module_one/SubModule_one_1/comp1/comp1.module').then(m => m.Comp1Module) },
 { path: 'comp2', loadChildren: () => import('./Module_one/SubModule_one_1/comp2/comp2.module').then(m => m.Comp2Module) }, 
 { path: 'comp3', loadChildren: () => import('./Module_one/SubModule_one_2/comp3/comp3.module').then(m => m.Comp3Module) }, 
 { path: 'comp4', loadChildren: () => import('./Module_two/SubModule_two/comp4/comp4.module').then(m => m.Comp4Module) }];

@NgModule({
  
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
