import { Component, OnInit } from '@angular/core';
declare var swal: any;
declare var $: any;

@Component({
  selector: 'bn-acp-schedule',
  templateUrl: './acp-schedule.component.html',
  styleUrls: ['./acp-schedule.component.scss']
})
export class AcpScheduleComponent implements OnInit {
    public scheduleA: any[] = [
        {id: 0, hour: '7:00', days: [{subject: 'Taller de Atletismo', teacher: 'BERENICE GAMBOA QUIROZ'}, {subject: 'Desarrollo infantil I', teacher: 'GIOVANNA LEON FERNANDEZ DE LARA'}, {subject: 'Taller de Atletismo', teacher: 'BERENICE GAMBOA QUIROZ'}, {subject: 'Bases filosóficas, legales y organizativas del sistema educativo mexicano', teacher: 'SABINO HERNANDEZ ESCALERA'}, {subject: '', teacher: ''}]},
        {id: 1, hour: '8:00', days: [{subject: 'Taller de Atletismo', teacher: 'BERENICE GAMBOA QUIROZ'}, {subject: 'Desarrollo infantil I', teacher: 'GIOVANNA LEON FERNANDEZ DE LARA'}, {subject: 'Taller de Atletismo', teacher: 'BERENICE GAMBOA QUIROZ'}, {subject: 'Bases filosóficas, legales y organizativas del sistema educativo mexicano', teacher: 'SABINO HERNANDEZ ESCALERA'}, {subject: '', teacher: ''}]},
        {id: 2, hour: '9:00', days: [{subject: 'Problemas y políticas de la educación básica', teacher: 'FRANCISCO JAVIER SAUCEDO JONAPA'}, {subject: 'Escuela y contexto social', teacher: 'ISAAC ROMERO AGUILAR'}, {subject: 'Tutoría', teacher: 'SABINO HERNANDEZ ESCALERA'}, {subject: 'Escuela y contexto social', teacher: 'ISAAC ROMERO AGUILAR'}, {subject: 'Estrategias para el estudio y la comunicación', teacher: 'JORGE RAUL MORALES CRUZADO'}]},
        {id: 3, hour: '10:00', days: [{subject: 'Problemas y políticas de la educación básica', teacher: 'FRANCISCO JAVIER SAUCEDO JONAPA'}, {subject: 'Escuela y contexto social', teacher: 'ISAAC ROMERO AGUILAR'}, {subject: 'Tutoría', teacher: 'SABINO HERNANDEZ ESCALERA'}, {subject: 'Escuela y contexto social', teacher: 'ISAAC ROMERO AGUILAR'}, {subject: 'Estrategias para el estudio y la comunicación', teacher: 'JORGE RAUL MORALES CRUZADO'}]},
        {id: 4, hour: '11:00', days: [{subject: 'Escuela y contexto social', teacher: 'ISAAC ROMERO AGUILAR'}, {subject: 'Bases filosóficas, legales y organizativas del sistema educativo mexicano', teacher: 'SABINO HERNANDEZ ESCALERA'}, {subject: 'Problemas y políticas de la educación básica', teacher: 'FRANCISCO JAVIER SAUCEDO JONAPA'}, {subject: 'Desarrollo infantil I', teacher: 'GIOVANNA LEON FERNANDEZ DE LARA'}, {subject: 'Desarrollo infantil I', teacher: 'GIOVANNA LEON FERNANDEZ DE LARA'}]},
        {id: 5, hour: '12:00', days: [{subject: 'Escuela y contexto social', teacher: 'ISAAC ROMERO AGUILAR'}, {subject: 'Bases filosóficas, legales y organizativas del sistema educativo mexicano', teacher: 'SABINO HERNANDEZ ESCALERA'}, {subject: 'Problemas y políticas de la educación básica', teacher: 'FRANCISCO JAVIER SAUCEDO JONAPA'}, {subject: 'Desarrollo infantil I', teacher: 'GIOVANNA LEON FERNANDEZ DE LARA'}, {subject: 'Desarrollo infantil I', teacher: 'GIOVANNA LEON FERNANDEZ DE LARA'}]},
        {id: 6, hour: '13:00', days: [{subject: 'Propósitos y contenidos de la educación básica I', teacher: 'MARIA DEL ROSARIO BRINGAS BENAVIDES'}, {subject: 'Introducción a la educación física', teacher: 'MARIA DEL CARMEN LOPEZ REYES'}, {subject: 'Propósitos y contenidos de la educación básica I', teacher: 'MARIA DEL ROSARIO BRINGAS BENAVIDES'}, {subject: 'Estrategias para el estudio y la comunicación', teacher: 'JORGE RAUL MORALES CRUZADO'}, {subject: 'Introducción a la educación física', teacher: 'MARIA DEL CARMEN LOPEZ REYES'}]},
        {id: 7, hour: '14:00', days: [{subject: 'Propósitos y contenidos de la educación básica I', teacher: 'MARIA DEL ROSARIO BRINGAS BENAVIDES'}, {subject: 'Introducción a la educación física', teacher: 'MARIA DEL CARMEN LOPEZ REYES'}, {subject: 'Propósitos y contenidos de la educación básica I', teacher: 'MARIA DEL ROSARIO BRINGAS BENAVIDES'}, {subject: 'Estrategias para el estudio y la comunicación', teacher: 'JORGE RAUL MORALES CRUZADO'}, {subject: 'Introducción a la educación física', teacher: 'MARIA DEL CARMEN LOPEZ REYES'}]},
    ];
    public scheduleB: any[] = [
        {id: 0, hour: '7:00', days: [null, null, null, null, null]},
        {id: 1, hour: '8:00', days: [null, null, null, null, null]},
        {id: 2, hour: '9:00', days: [null, null, null, null, null]},
        {id: 3, hour: '10:00', days: [null, null, null, null, null]},
        {id: 4, hour: '11:00', days: [null, null, null, null, null]},
        {id: 5, hour: '12:00', days: [null, null, null, null, null]},
        {id: 6, hour: '13:00', days: [null, null, null, null, null]},
        {id: 7, hour: '14:00', days: [null, null, null, null, null]},
    ];

    constructor() { }

    ngOnInit() {
    }

    public onAddSchedule(day, posSchedule, posDay){
        let parent = this;
        swal({
          title: 'Lunes de 8:00 a 9:00',
          html: `
          <div class="bn-form-row">
            <div class="col-md-12">
                <div class="form-group">
                  <label for="bn-subject" class="bmd-label-floating">Nombre de la materia</label>
                  <input type="text" class="form-control" id="bn-subject">
                </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="bn-teacher" class="bmd-label-floating">Nombre del docente</label>
                <input type="text" class="form-control" id="bn-teacher">
              </div>
            </div>
          </div>
          `,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {
            let subject = $('#bn-subject').val();
            let teacher = $('#bn-teacher').val();
            let data = {
                subject, teacher
            }
            parent.scheduleA[posSchedule].days[posDay] = data;
          swal({
            type: 'success',
            html: '¡Horario actualizado exitosamente!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false

          })
        }).catch(swal.noop)
        $('#bn-subject').val(day.subject);
        $('#bn-teacher').val(day.teacher);
    }

}
