import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputPlanetComponent } from './input-planet/input-planet.component';
import { CpecificationsPlanetComponent } from './cpecifications-planet/cpecifications-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPlanetComponent,
    CpecificationsPlanetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
