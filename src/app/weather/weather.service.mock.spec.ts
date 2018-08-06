import { of } from 'rxjs/observable/of';

export const _MOCK_DATA = {
    cod: '200',
    message: 0.003,
    cnt: 8,
    list: [
        {
            dt: 1533513600,
            main: {
                temp: 15.43,
                temp_min: 15.43,
                temp_max: 17.02,
                pressure: 1025.4,
                sea_level: 1032.92,
                grnd_level: 1025.4,
                humidity: 75,
                temp_kf: -1.59
            },
            weather: [
                {
                    id: 800,
                    main: 'Clear', description: 'clear sky', icon: '01n'
                }],
            clouds: { all: 0 }, wind: { speed: 2.26, deg: 122.501 }, sys: { pod: 'n' }, dt_txt: '2018-08-06 00:00:00'
        }
    ],
    city: { id: 2643743, name: '_London', coord: { lat: 51.5073, lon: -0.1277 }, country: 'GB', population: 1000000 }
};


export class WeatherServiceStub {

    public searchWeatherForCity = jasmine.createSpy('searchWeatherForCity').and.callFake(
        () => of(_MOCK_DATA)
    );

}
