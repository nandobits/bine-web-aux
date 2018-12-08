import { Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { AcpDashboardComponent } from './pages/acp-dashboard/acp-dashboard.component';
import { AcpStudentsComponent } from './pages/acp-students/acp-students.component';
import { AcpTeachersComponent } from './pages/acp-teachers/acp-teachers.component';
import { AcpCurricularMapComponent } from './pages/acp-curricular-map/acp-curricular-map.component';
import { AcpScheduleComponent } from './pages/acp-schedule/acp-schedule.component';
import { AcpGroupsComponent } from './pages/acp-groups/acp-groups.component';
import { AcpQualificationsComponent } from './pages/acp-qualifications/acp-qualifications.component';
import { AcpQualificationsUploadPeriodComponent } from './pages/acp-qualifications-upload-period/acp-qualifications-upload-period.component';
import { AcpDocumentsComponent } from './pages/acp-documents/acp-documents.component';
import { AcpUserStatisticsComponent } from './pages/acp-dashboard/acp-user-statistics/acp-user-statistics.component';
import { AcpOutstandingStudentsComponent } from './pages/acp-outstanding-students/acp-outstanding-students.component';

export const appRoutes: Routes = [
    {
        path: 'admin-lic-principal',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'panel-de-control', pathMatch: 'full' },
            { path: 'panel-de-control', component: AcpDashboardComponent },
            { path: 'panel-de-control/estadisticas/estudiantes/baja-temporal', component: AcpUserStatisticsComponent },
            { path: 'estudiantes', component: AcpStudentsComponent },
            { path: 'docentes', component: AcpTeachersComponent },
            { path: 'mapa-curricular', component: AcpCurricularMapComponent },
            { path: 'horarios', component: AcpScheduleComponent },
            { path: 'grupos', component: AcpGroupsComponent },
            { path: 'calificaciones', component: AcpQualificationsComponent },
            { path: 'alumnos-destacados', component: AcpOutstandingStudentsComponent },
            { path: 'calificaciones-cargar', component: AcpQualificationsUploadPeriodComponent },
            { path: 'documentos', component: AcpDocumentsComponent },
        ]
    }
]
