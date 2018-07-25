import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperToolComponent } from './cropper-tool/cropper-tool.component';


@NgModule({
  declarations: [
    AppComponent,
    CropperToolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
