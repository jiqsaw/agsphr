import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { WeatherModule } from './weather/weather.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
