import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherEffects } from './store/effects/weather';
import { reducer, weatherReducerFractal } from './store/reducers/weather';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature(weatherReducerFractal, reducer),
    EffectsModule.forFeature([
      WeatherEffects
    ]),
    HttpClientModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
