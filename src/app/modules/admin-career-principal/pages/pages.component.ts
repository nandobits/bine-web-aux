import { Component, OnInit } from '@angular/core';
declare function initScrollBar(): any;
declare function initApp(): any;

@Component({
  selector: 'bn-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        initScrollBar();
        initApp();
    }

}
