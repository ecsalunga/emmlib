import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmmlibService } from './emmlib.service';
import { OutletComponent } from './components/outlet/outlet.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [ OutletComponent ],
  exports: [ OutletComponent ],
  providers: [ EmmlibService ]
})
export class EmmlibModule { }