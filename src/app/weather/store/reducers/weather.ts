import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Weather } from '../../../model/weather';
import * as fromWeatherActions from '../actions/weather';



export const weatherReducerFractal = 'weather';

export interface State {
  isLoading: boolean;
  weather: Weather[];
  error: HttpErrorResponse;
  success: string;
}

const initialState: State = {
  isLoading: false,
  weather: [],
  error: null,
  success: null
};

export function reducer(
  state: State = initialState,
  action: fromWeatherActions.Actions,
): State {
  switch (action.type) {


    case fromWeatherActions.WEATHER_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });


    case fromWeatherActions.GET_WEATHER_BY_CITY_NAME:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case fromWeatherActions.GET_WEATHER_BY_CITY_NAME_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        weather: [
          action.payload,
          ...state.weather
        ],
      });

    default:
      return state;

  }
}

/**
 * Selectors.
 */
export const getFractalState = createFeatureSelector<State>(weatherReducerFractal);

export const getError = createSelector(getFractalState, (state: State): HttpErrorResponse => state.error);
export const getSuccess = createSelector(getFractalState, (state: State): string => state.success);
export const getLoading = createSelector(getFractalState, (state: State) => state.isLoading);

// MemberBenefit List
export const getWeather = createSelector(getFractalState, (state: State): Weather[] => state.weather);
