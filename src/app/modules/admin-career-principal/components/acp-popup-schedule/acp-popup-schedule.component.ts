import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-acp-popup-schedule',
  templateUrl: './acp-popup-schedule.component.html',
  styleUrls: ['./acp-popup-schedule.component.scss']
})
export class AcpPopupScheduleComponent implements OnInit {
    @Output() onHidePopup = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    public onCancel(){
        this.onHidePopup.emit();
    }

    public onSave(){

    }

}
