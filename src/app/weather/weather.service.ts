import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';

@Injectable()
export class WeatherService {

  private url = 'https://api.openweathermap.org/data/2.5/forecast';
  private params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city: string): Observable<Weather> {

    this.params.q = city;

    return this.http.get(this.url, { params: this.params });

  }

}
