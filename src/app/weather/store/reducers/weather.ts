import { HttpErrorResponse } from '@angular/common/http';
import { Weather } from '../../../model/weather';
import * as fromWeatherActions from '../actions/weather';


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
