import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function initDatePickers(): any;

@Component({
  selector: 'bn-acp-dashboard',
  templateUrl: './acp-dashboard.component.html',
  styleUrls: ['./acp-dashboard.component.scss']
})
export class AcpDashboardComponent implements OnInit {
    public doughnutChartLabelsAdmin: string[] = ['Activos', 'Suspendidos'];
    public doughnutChartDataAdmin: number[] = [11, 1];
    public doughnutChartLabelsTeacher: string[] = ['Activos', 'Suspendidos'];
    public doughnutChartDataTeacher: number[] = [50, 7];
    public doughnutChartLabelsStudent: string[] = ['Activos', 'Bajas temporales', 'Bajas definitivas'];
    public doughnutChartDataStudent: number[] = [300, 10, 9];
    public doughnutChartColorsStudent: any[] = [{ backgroundColor: ["#72B9F2", "#FFDE84", "#FF8BA6" ] }];
    public doughnutChartLabelsPersonal: string[] = ['Activos', 'Suspendidos'];
    public doughnutChartDataPersonal: number[] = [20, 2];
    public doughnutChartColors: any[] = [{ backgroundColor: ["#72B9F2", "#FF8BA6"] }];
    public doughnutChartType:string = 'doughnut';

    constructor(private router: Router) { }

    ngOnInit() {
        initDatePickers();
    }

    public doughnutChartStudentClicked(event){
        this.router.navigate(['/admin-lic-principal/panel-de-control/estadisticas/estudiantes/baja-temporal'])
    }
}
