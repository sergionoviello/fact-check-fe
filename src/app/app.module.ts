import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperToolComponent } from './cropper-tool/cropper-tool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditImageComponent } from './edit-image/edit-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CropperToolComponent,
    HomeComponent,
    EditImageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
