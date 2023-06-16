import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppDesignComponent } from './appDesign/appDesign.component';
import { ContactComponent } from './contact/contact.component';
import { GraphicComponent } from './graphic/graphic.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web-design', component: WebComponent },
  { path: 'app-design', component: AppDesignComponent },
  { path: 'graphic-design', component: GraphicComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
