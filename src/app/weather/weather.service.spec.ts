import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { async, inject, TestBed } from '../../../node_modules/@angular/core/testing';
import { Weather } from '../model/weather';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [WeatherService]
    }));

    beforeEach(inject([WeatherService], s => {
        service = s;
    }));

    it('should return data', async(() => {
        service.searchWeatherForCity('London').subscribe((data: Weather) => {
            expect(data).toBeTruthy();
            expect(data.city.name).toBe('London');
        });
    }));
});
