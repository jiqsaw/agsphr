import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

export const WEATHER_ERROR = '[WEATHER] Error';

export const GET_WEATHER_BY_CITY_NAME = '[WEATHER] Get By City Name';
export const GET_WEATHER_BY_CITY_NAME_SUCCESS = '[WEATHER] Get By City Name Success';

export class WeatherError implements Action {
  readonly type = WEATHER_ERROR;
  constructor(public payload: HttpErrorResponse) { }
}

export class GetWeatherByCityName implements Action {
  readonly type = GET_WEATHER_BY_CITY_NAME;
  constructor(public payload: {
    city: string,
  }) { }
}

export class GetWeatherByCityNameSuccess implements Action {
  readonly type = GET_WEATHER_BY_CITY_NAME_SUCCESS;
  constructor(public payload: any) { }
}

export type Actions
  = WeatherError
  | GetWeatherByCityName
  | GetWeatherByCityNameSuccess
  ;
