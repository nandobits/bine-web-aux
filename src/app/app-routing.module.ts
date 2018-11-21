import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { AcpCostsComponent } from './pages/acp-costs/acp-costs.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'ingresar', component: LoginComponent },
    { path: 'costos', component: AcpCostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
