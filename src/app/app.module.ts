import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroMainComponent } from './components/hero-main/hero-main.component';
import { DesktopMenuComponent } from './components/desktop-menu/desktop-menu.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroMainComponent,
    DesktopMenuComponent,
    SkillCardComponent,
    MobileMenuComponent,
    ProfileCardComponent,
    HomeComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
