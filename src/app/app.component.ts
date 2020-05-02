import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'white-battery';

    constructor(router: Router) {
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                console.log(e);
                this.drawerRef.close();
            }
        })
    }

    @ViewChild('drawer') drawerRef: ElementRef<any>;
}
