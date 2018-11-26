import { Component, OnInit } from '@angular/core';
declare function initTable(): any;

@Component({
  selector: 'bn-acp-user-statistics',
  templateUrl: './acp-user-statistics.component.html',
  styleUrls: ['./acp-user-statistics.component.scss']
})
export class AcpUserStatisticsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        initTable();
    }

}
