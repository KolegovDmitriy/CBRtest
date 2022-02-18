import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InputPlanetComponent } from './input-planet/input-planet.component';
import { SpecificationsPlanetComponent } from './specifications-planet/specifications-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPlanetComponent,
    SpecificationsPlanetComponent
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
