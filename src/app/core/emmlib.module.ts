import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatSnackBarModule, MatIconModule
} from '@angular/material';

import { EmmLibCoreService } from './emmlibcore.service';
import { EmmLibOutletComponent } from './components/emmlib-outlet/emmlib-outlet.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  imports: [
    CommonModule, MatSnackBarModule, MatIconModule
  ],
  exports: [
    EmmLibOutletComponent, ImageUploaderComponent, RatingComponent,
    MatSnackBarModule, MatIconModule,
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
  ],
  declarations: [ 
    EmmLibOutletComponent, ImageUploaderComponent, RatingComponent
  ],
  entryComponents: [ ]
})
export class EmmLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EmmLibModule,
      providers: [ EmmLibCoreService ]
    };
  }
 }
