import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { Store, StoreModule } from '../../../node_modules/@ngrx/store';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { WeatherServiceStub } from './weather.service.mock.spec';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<{}>;
  let weatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot({}),
        FormsModule],
      providers: [WeatherService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .overrideComponent(WeatherContainer, {
        set: {
          providers: [{ provide: WeatherService, useClass: WeatherServiceStub }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('store to be defined', async(() => {
    expect(store).toBeDefined();
  }));

  it('data should defined in component', async(() => {
    expect(component.data$).toBeDefined();
  }));

});
