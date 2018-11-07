import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Routing */
import { appRoutes } from './admin-career-principal.routing';

/* Components */
import { AcpSidebarComponent } from './components/acp-sidebar/acp-sidebar.component';
import { AcpNavbarComponent } from './components/acp-navbar/acp-navbar.component';

/* Pages */
import { PagesComponent } from './pages/pages.component';
import { AcpDashboardComponent } from './pages/acp-dashboard/acp-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    PagesComponent,
    AcpDashboardComponent,
    AcpSidebarComponent,
    AcpNavbarComponent,
  ]
})
export class AdminCareerPrincipalModule { }
