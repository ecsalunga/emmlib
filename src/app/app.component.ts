import { Component } from '@angular/core';

import { EmmLibCoreService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public core: EmmLibCoreService) { }

  Tester() {
    this.core.Load("app-tester");
    this.core.Display("issue load: app-tester");
  }
}
