import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDesignComponent } from './appDesign/appDesign.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GraphicComponent } from './graphic/graphic.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LocationsMiniComponent } from './locations-mini/locations-mini.component';
import { LocationsComponent } from './locations/locations.component';
import { WebComponent } from './web/web.component';
import { HomeIntroComponent } from './home/home-intro/home-intro.component';
import { HomeDesignsComponent } from './home/home-designs/home-designs.component';
import { HomeExtrasComponent } from './home/home-extras/home-extras.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDesignComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WebComponent,
    GraphicComponent,
    AboutComponent,
    LocationsComponent,
    ContactComponent,
    LocationsMiniComponent,
    HomeIntroComponent,
    HomeDesignsComponent,
    HomeExtrasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
