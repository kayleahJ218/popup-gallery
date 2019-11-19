import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,  MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';

import { GalleryModule } from 'ng-gallery';

/**
 * NgModule that includes all Material modules that are required to serve 
 * the Plunker.
 */
@NgModule({
  exports: [
    // Material
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot({
      style: {
        height: '500px',
        width: '700px'
      }
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */