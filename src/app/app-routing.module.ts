import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditImageComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
