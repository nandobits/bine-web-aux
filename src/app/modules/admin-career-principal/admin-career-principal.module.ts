import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Routing */
import { appRoutes } from './admin-career-principal.routing';

/* Components */
import { AcpSidebarComponent } from './components/acp-sidebar/acp-sidebar.component';
import { AcpNavbarComponent } from './components/acp-navbar/acp-navbar.component';

/* Pages */
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
    AcpDashboardComponent,
    AcpSidebarComponent,
    AcpNavbarComponent,
    AcpStudentsComponent,
    AcpTeachersComponent,
    AcpCurricularMapComponent,
    AcpScheduleComponent,
    AcpGroupsComponent,
    AcpQualificationsComponent,
    AcpQualificationsUploadPeriodComponent,
    AcpDocumentsComponent,
  ]
})
export class AdminCareerPrincipalModule { }
