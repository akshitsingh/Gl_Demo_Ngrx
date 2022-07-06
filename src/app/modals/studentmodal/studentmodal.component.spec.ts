import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmodalComponent } from './studentmodal.component';

describe('StudentmodalComponent', () => {
  let component: StudentmodalComponent;
  let fixture: ComponentFixture<StudentmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
