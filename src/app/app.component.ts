import { Component, Renderer2, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    private subRouter: any;

    constructor(private router: Router, private render: Renderer2){
        this.subRouter = this.router.events.subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    switch(this.router.url){
                        case '/':
                            this.render.removeClass(document.body, 'off-canvas-sidebar');
                            this.render.addClass(document.body, 'offline-doc');
                            break;

                        case '/ingresar':
                            this.render.removeClass(document.body, 'offline-doc');
                            this.render.addClass(document.body, 'off-canvas-sidebar');
                            break;
                    }
                }
            }
        );
    }

    ngOnDestroy(){
        if(this.subRouter) this.subRouter.unsubscribe();
    }
}
