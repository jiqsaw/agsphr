import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../../../model/weather';
import { WeatherService } from '../../weather.service';
import * as fromWeatherActions from '../actions/weather';



@Injectable()
export class WeatherEffects {

  public constructor(
    private actions$: Actions,
    private service: WeatherService
) { }

  @Effect()
  getCityByName$: Observable<Action> = this.actions$
    .ofType(fromWeatherActions.GET_WEATHER_BY_CITY_NAME)
    .map((action: fromWeatherActions.GetWeatherByCityName) => action.payload)
    .switchMap((payload) => this.service.searchWeatherForCity(payload.city)
      .map((data: Weather) => new fromWeatherActions.GetWeatherByCityNameSuccess(data))
      .catch((error: HttpErrorResponse) => Observable.of(new fromWeatherActions.WeatherError(error))));

}
