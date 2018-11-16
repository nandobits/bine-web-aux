import { Component, OnInit } from '@angular/core';
declare var swal: any;
declare var $: any;

@Component({
  selector: 'bn-acp-curricular-map',
  templateUrl: './acp-curricular-map.component.html',
  styleUrls: ['./acp-curricular-map.component.scss']
})
export class AcpCurricularMapComponent implements OnInit {
    public subjects = [
        {
            num: 1,
            name: 'Bases filosóficas, legales y organizativas del sistema educativo mexicano',
            key: 'F11',
            hours: 4,
            periods: 3
        },
        {
            num: 2,
            name: 'Problemas y políticas de la educación básica',
            key: 'F12',
            hours: 4,
            periods: 3
        },
        {
            num: 3,
            name: 'Estrategias para el estudio y la comunicación',
            key: 'F13',
            hours: 4,
            periods: 3
        },
        {
            num: 4,
            name: 'Propósitos y contenidos de la educación básica I',
            key: 'F14',
            hours: 4,
            periods: 3
        },
        {
            num: 5,
            name: 'Introducción a la educación física',
            key: 'F15',
            hours: 4,
            periods: 3
        },
        {
            num: 6,
            name: 'Desarrollo infantil I',
            key: 'F16',
            hours: 4,
            periods: 3
        },
        {
            num: 7,
            name: 'Escuela y contexto social',
            key: 'F17',
            hours: 4,
            periods: 3
        }
    ];

    public courses = [
        {
            num: 8,
            name: 'Taller de Atletismo',
            key: 'F18',
            hours: 4,
            periods: 3
        },
        {
            num: 9,
            name: 'Tutoría',
            key: 'F19',
            hours: 4,
            periods: 3
        }
    ];

    constructor() { }

    ngOnInit() {

    }

    public onAddSubject(){
        let parent = this;
        swal({
          title: 'Datos de la materia',
          html: `
          <div class="bn-form-row">
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-num" class="bmd-label-floating">Numero</label>
                <input type="text" class="form-control" id="bn-num">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="bn-name" class="bmd-label-floating">Nombre de la materia</label>
                <input type="text" class="form-control" id="bn-name">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-key" class="bmd-label-floating">Clave</label>
                <input type="text" class="form-control" id="bn-key">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-hours" class="bmd-label-floating">Horas</label>
                <input type="text" class="form-control" id="bn-hours">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-periods" class="bmd-label-floating">Periodos</label>
                <input type="text" class="form-control" id="bn-periods">
              </div>
            </div>
          </div>
          `,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {
            let num = $('#bn-num').val();
            let name = $('#bn-name').val();
            let key = $('#bn-key').val();
            let hours = $('#bn-hours').val();
            let periods = $('#bn-periods').val();
            let data = {
                num, name, key, hours, periods
            }
            parent.subjects.push(data);
          swal({
            type: 'success',
            html: '¡Materia guardada exitosamente!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false

          })
        }).catch(swal.noop)
    }

    public onUpdateSubject(subject, pos){
        let parent = this;
        swal({
          title: 'Datos de la materia',
          html: `
          <div class="bn-form-row">
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-num" class="bmd-label-floating">Numero</label>
                <input type="text" class="form-control" id="bn-num">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="bn-name" class="bmd-label-floating">Nombre de la materia</label>
                <input type="text" class="form-control" id="bn-name">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-key" class="bmd-label-floating">Clave</label>
                <input type="text" class="form-control" id="bn-key">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-hours" class="bmd-label-floating">Horas</label>
                <input type="text" class="form-control" id="bn-hours">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-periods" class="bmd-label-floating">Periodos</label>
                <input type="text" class="form-control" id="bn-periods">
              </div>
            </div>
          </div>
          `,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {
            let num = $('#bn-num').val();
            let name = $('#bn-name').val();
            let key = $('#bn-key').val();
            let hours = $('#bn-hours').val();
            let periods = $('#bn-periods').val();
            let data = {
                num, name, key, hours, periods
            }
            parent.subjects[pos] = data;
          swal({
            type: 'success',
            html: '¡Materia actualizada exitosamente!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false

          })
        }).catch(swal.noop)

        $('#bn-num').val(subject.num);
        $('#bn-name').val(subject.name);
        $('#bn-key').val(subject.key);
        $('#bn-hours').val(subject.hours);
        $('#bn-periods').val(subject.periods);
    }

    public onDeleteSubject(pos){
        this.subjects.splice(pos, 1);
    }

    public onAddCourse(){
        let parent = this;
        swal({
          title: 'Datos de la materia',
          html: `
          <div class="bn-form-row">
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-num" class="bmd-label-floating">Numero</label>
                <input type="text" class="form-control" id="bn-num">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="bn-name" class="bmd-label-floating">Nombre de la materia</label>
                <input type="text" class="form-control" id="bn-name">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-key" class="bmd-label-floating">Clave</label>
                <input type="text" class="form-control" id="bn-key">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-hours" class="bmd-label-floating">Horas</label>
                <input type="text" class="form-control" id="bn-hours">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-periods" class="bmd-label-floating">Periodos</label>
                <input type="text" class="form-control" id="bn-periods">
              </div>
            </div>
          </div>
          `,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {
            let num = $('#bn-num').val();
            let name = $('#bn-name').val();
            let key = $('#bn-key').val();
            let hours = $('#bn-hours').val();
            let periods = $('#bn-periods').val();
            let data = {
                num, name, key, hours, periods
            }
            parent.courses.push(data);
          swal({
            type: 'success',
            html: '¡Materia guardada exitosamente!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false

          })
        }).catch(swal.noop)
    }

    public onUpdateCourse(subject, pos){
        let parent = this;
        swal({
          title: 'Datos de la materia',
          html: `
          <div class="bn-form-row">
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-num" class="bmd-label-floating">Numero</label>
                <input type="text" class="form-control" id="bn-num">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="bn-name" class="bmd-label-floating">Nombre de la materia</label>
                <input type="text" class="form-control" id="bn-name">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-key" class="bmd-label-floating">Clave</label>
                <input type="text" class="form-control" id="bn-key">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-hours" class="bmd-label-floating">Horas</label>
                <input type="text" class="form-control" id="bn-hours">
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="bn-periods" class="bmd-label-floating">Periodos</label>
                <input type="text" class="form-control" id="bn-periods">
              </div>
            </div>
          </div>
          `,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {
            let num = $('#bn-num').val();
            let name = $('#bn-name').val();
            let key = $('#bn-key').val();
            let hours = $('#bn-hours').val();
            let periods = $('#bn-periods').val();
            let data = {
                num, name, key, hours, periods
            }
            parent.courses[pos] = data;
          swal({
            type: 'success',
            html: '¡Materia actualizada exitosamente!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false

          })
        }).catch(swal.noop)

        $('#bn-num').val(subject.num);
        $('#bn-name').val(subject.name);
        $('#bn-key').val(subject.key);
        $('#bn-hours').val(subject.hours);
        $('#bn-periods').val(subject.periods);
    }

    public onDeleteCourse(pos){
        this.courses.splice(pos, 1);
    }

}
