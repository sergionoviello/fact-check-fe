import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperToolComponent } from './cropper-tool/cropper-tool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSidenavModule, MatMenuModule, MatIconModule, MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditImageComponent } from './edit-image/edit-image.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { OrderbyPipe } from './orderby.pipe';
import { DateShortFormatPipe } from './date-short-format.pipe';
import { FilterByDatePipe } from './filter-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CropperToolComponent,
    HomeComponent,
    EditImageComponent,
    SearchResultsComponent,
    OrderbyPipe,
    DateShortFormatPipe,
    FilterByDatePipe,

  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
