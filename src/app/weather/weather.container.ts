import { Component } from '@angular/core';
import { Store } from '../../../node_modules/@ngrx/store';
import * as fromWeatherActions from '../weather/store/actions/weather';
import * as fromWeatherStore from '../weather/store/reducers/weather';


@Component({
  selector: 'app-weather',
  template: `
  <app-search [isLoading$]="isLoading$" (searchSubmit)="citySearch($event)"></app-search>
  <app-results [data$]="data$"></app-results>  `
})
export class WeatherContainer {

  data$ = this.store.select(fromWeatherStore.getWeather);
  isLoading$ = this.store.select(fromWeatherStore.getLoading);

  constructor(
    private store: Store<fromWeatherStore.State>,
  ) {}

  citySearch(city: string) {

    this.store.dispatch(new fromWeatherActions.GetWeatherByCityName(
      {
        city: city
      }));

  }
}
