import { Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { AcpDashboardComponent } from './pages/acp-dashboard/acp-dashboard.component';
import { AcpStudentsComponent } from './pages/acp-students/acp-students.component';

export const appRoutes: Routes = [
    {
        path: 'admin-lic-principal',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'panel-de-control', pathMatch: 'full' },
            { path: 'panel-de-control', component: AcpDashboardComponent },
            { path: 'estudiantes', component: AcpStudentsComponent },
        ]
    }
]
