import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperToolComponent } from './cropper-tool.component';

describe('CropperToolComponent', () => {
  let component: CropperToolComponent;
  let fixture: ComponentFixture<CropperToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
