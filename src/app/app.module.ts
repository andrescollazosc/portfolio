import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroMainComponent } from './components/hero-main/hero-main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroMainComponent,
    NavBarComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
