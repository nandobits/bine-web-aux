import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'bn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    ngOnInit() {
        setTimeout(function() {
            $('.card').removeClass('card-hidden');
        }, 700);
    }
}
