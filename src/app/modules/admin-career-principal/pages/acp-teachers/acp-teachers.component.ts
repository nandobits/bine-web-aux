import { Component, OnInit } from '@angular/core';
declare function initTable(): any;

@Component({
  selector: 'bn-acp-teachers',
  templateUrl: './acp-teachers.component.html',
  styleUrls: ['./acp-teachers.component.scss']
})
export class AcpTeachersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      initTable();
  }

}
