import { Component, OnInit } from '@angular/core';
declare function initTable(): any;

@Component({
  selector: 'bn-acp-students',
  templateUrl: './acp-students.component.html',
  styleUrls: ['./acp-students.component.scss']
})
export class AcpStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      initTable();
  }

}
