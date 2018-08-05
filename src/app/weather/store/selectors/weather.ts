import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';
import { Weather } from '../../../model/weather';
import { State } from '../reducers/weather';

export const weatherReducerFractal = 'weather';

export const getFractalState = createFeatureSelector<State>(weatherReducerFractal);

export const getError = createSelector(getFractalState, (state: State): HttpErrorResponse => state.error);
export const getLoading = createSelector(getFractalState, (state: State) => state.isLoading);

export const getWeather = createSelector(getFractalState, (state: State): Weather[] => state.weather);
