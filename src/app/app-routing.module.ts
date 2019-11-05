import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntromainpageComponent } from './components/intromainpage/intromainpage.component';
import { InterfaceComponent } from './components/interface/interface.component';

const routes: Routes = [
	{ path: '', component: IntromainpageComponent },
  { path: 'interface', component: InterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IntromainpageComponent, InterfaceComponent];
