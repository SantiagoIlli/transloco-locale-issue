import {Component} from '@angular/core';
import {TranslocoLocaleService} from '@ngneat/transloco-locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transloco-locale-lib-issue';

  constructor(private service: TranslocoLocaleService) {
    this.service.setLocale('es-AR');

  }
}
