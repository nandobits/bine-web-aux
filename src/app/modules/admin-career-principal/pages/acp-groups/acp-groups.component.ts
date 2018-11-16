import { Component, OnInit } from '@angular/core';
declare var swal: any;
declare var $: any;

@Component({
  selector: 'bn-acp-groups',
  templateUrl: './acp-groups.component.html',
  styleUrls: ['./acp-groups.component.scss']
})
export class AcpGroupsComponent implements OnInit {
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

    public studentsB: any[] = [
        {name: 'AGUAYO ROSENDO JOSE ANGEL', promCurrent: '8.9', promGlobal: '9.1', status: 1, translate: false},
        {name: 'AGUILAR LOPEZ LUIS ALFREDO', promCurrent: '7.8', promGlobal: '8.5', status: 1, translate: false},
        {name: 'BASILIO GUZMAN GILBERTO', promCurrent: '6.5', promGlobal: '8.1', status: 1, translate: false},
        {name: 'CABALLERO BELLO DANIA MICHELLE', promCurrent: '9.8', promGlobal: '9.6', status: 1, translate: false},
        {name: 'DEOLARTE TEXCUCANO DANIEL', promCurrent: '7.9', promGlobal: '8.2', status: 1, translate: false},
        {name: 'DOMINGUEZ PAREDES MANUEL RAUSEL', promCurrent: '6.8', promGlobal: '7.5', status: 1, translate: false},
        {name: 'FLORES FLORES MIRANDA', promCurrent: '9.0', promGlobal: '9.5', status: 1, translate: false},
        {name: 'GARCES GONZALEZ LUIS OSCAR', promCurrent: '7.7', promGlobal: '9.1', status: 1, translate: false},
        {name: 'GERMAN CHINO CRISTOPHER', promCurrent: '6.3', promGlobal: '9.6', status: 1, translate: false},
        {name: 'GOMEZ MORA HECTOR EDUARDO', promCurrent: '8.1', promGlobal: '8.9', status: 1, translate: false},
    ];

    constructor() { }

    ngOnInit() {
    }

    public onUpdateStudent(student, pos){
        let parent = this;
        swal({
          title: 'Estatus del estudiante',
          html: `
          <div class="bn-form-row">
              <div class="row justify-content-center">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="bn-status" value="1"> Activo
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="bn-status" value="2"> Baja temporal
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="bn-status" value="3"> Baja definitiva
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>
              </div>
              <br>
              <div class="row justify-content-center">
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" id="bn-translate">¿Es un traslado?
                      <span class="form-check-sign">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>
              </div>
          </div>
          `,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function(result) {
            let status = $('[name="bn-status"]:checked').val();
            let translate = $('#bn-translate').prop('checked');
            student.status = status;
            student.translate = translate;
            parent.studentsA[pos] = student;
          swal({
            type: 'success',
            html: '¡Estudiante actualizado exitosamente!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false

          })
        }).catch(swal.noop)
        $('input:radio[name="bn-status"]').filter('[value="'+student.status+'"]').attr('checked', true);
        $('#bn-translate').prop('checked', (student.translate) ? true : false);
    }
}
