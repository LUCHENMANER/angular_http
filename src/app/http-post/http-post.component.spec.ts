import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostComponent } from './http-post.component';

describe('HttpPostComponent', () => {
  let component: HttpPostComponent;
  let fixture: ComponentFixture<HttpPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
