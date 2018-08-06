import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { By } from '../../../../../node_modules/@angular/platform-browser';
import { SearchComponent } from './search.component';


import Spy = jasmine.Spy;

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    element = fixture.nativeElement;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(element.querySelector('form')).toBeTruthy();
  });

  it('should have a city input', () => {
    expect(fixture.debugElement.query(
      By.css('input[type="text"][name="city"]'))).toBeTruthy();
  });

  it('should have a submit button', () => {
    expect(element.querySelector('button')).toBeTruthy();
    expect(element.querySelector('button').type).toBe('submit');
  });


  it('should not emit on click if input length is too short', async(() => {

    spyOn(component.searchSubmit, 'emit');

    component.city = '-';
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitButton.nativeElement.click();

    fixture.detectChanges();

    expect(component.searchSubmit.emit).not.toHaveBeenCalled();

  }));

  it('should emit the searchSubmit event with a payload, based on form value', (done) => {

    component.searchSubmit.subscribe(g => {
      expect(g).toEqual('London');
      done();
    });

    component.city = 'London';
    component.search();

  });

});
