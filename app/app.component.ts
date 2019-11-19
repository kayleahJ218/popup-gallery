import { Component } from '@angular/core';
import { VERSION } from '@angular/material';
import { Gallery } from 'ng-gallery';
import { map } from 'rxjs/operators';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;

  constructor(public gallery: Gallery) {

  }

  ngOnInit() {
  }
}
