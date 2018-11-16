import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var swal: any;

@Component({
  selector: 'bn-acp-qualifications-upload-period',
  templateUrl: './acp-qualifications-upload-period.component.html',
  styleUrls: ['./acp-qualifications-upload-period.component.scss']
})
export class AcpQualificationsUploadPeriodComponent implements OnInit {
    public qualificationsName = ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE', 'DIEZ'];
    public qualificationsStatus = ['NO SE MUESTRA', 'NO SE MUESTRA', 'NO SE MUESTRA', 'NO SE MUESTRA', 'NO SE MUESTRA', 'NO SE MUESTRA', 'BÁSICO', 'REGULAR', 'SUFICIENTE', 'SATISFACTORIO', 'COMPETENTE'];
    public studentsA: any[] = [
        {name: 'CABRERA MARTINEZ EVELYN ROSA', promCurrent: '8.9', promGlobal: '9.1', status: 1, translate: false},
        {name: 'CALIXTO TORRES DIANA KARLA', promCurrent: '7.8', promGlobal: '8.5', status: 1, translate: false},
        {name: 'CARAVANTES REYES MIGUEL ANGEL', promCurrent: '6.5', promGlobal: '8.1', status: 1, translate: false},
        {name: 'CARDON PONCE ANDREA', promCurrent: '9.8', promGlobal: '9.6', status: 2, translate: false},
        {name: 'CASTILLO FRANCO LAURA LARIZA', promCurrent: '7.9', promGlobal: '8.2', status: 1, translate: false},
        {name: 'CHOLULA CASTELL MIGUEL ANGEL', promCurrent: '6.8', promGlobal: '7.5', status: 1, translate: true},
        {name: 'CUELLAR MENDOZA JESUS EMMANUEL', promCurrent: '9.0', promGlobal: '9.5', status: 1, translate: false},
        {name: 'DAZA GARCIA VICTOR', promCurrent: '7.7', promGlobal: '9.1', status: 3, translate: false},
        {name: 'DE LA ROSA MARTINEZ RUTH ESTEFANIA', promCurrent: '6.3', promGlobal: '9.6', status: 1, translate: false},
        {name: 'DENICIA MITZI MARIA FERNANDA', promCurrent: '8.1', promGlobal: '8.9', status: 1, translate: false},
    ];

    constructor(private router: Router) { }

    ngOnInit() {
    }

    public onSaveQualifications(){
        let parent = this;
        swal({
          type: 'success',
          html: '¡Calificaciones guardadas exitosamente!',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false

      }).then( (res) => {
          parent.router.navigate(['/admin-lic-principal/calificaciones']);
      })
    }

}
