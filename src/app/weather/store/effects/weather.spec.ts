import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../../weather.service';
import { WeatherServiceStub, _MOCK_DATA } from '../../weather.service.mock.spec';
import { WeatherEffects } from './weather';

describe('Weather Effects', () => {
    let effects: WeatherEffects;
    const actions: Observable<any> = null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({})
            ],
            providers: [
                WeatherEffects,
                provideMockActions(() => actions),
                {
                    provide: WeatherService,
                    useClass: WeatherServiceStub
                }
            ],
        });

        effects = TestBed.get(WeatherEffects);
    });

    it('should return mock data', () => {

        effects.getCityByName$.subscribe(result => {
            expect(result['payload']).toEqual(_MOCK_DATA);
        });
    });


});



