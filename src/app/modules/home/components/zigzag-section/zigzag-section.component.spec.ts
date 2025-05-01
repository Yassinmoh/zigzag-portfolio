import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigzagSectionComponent } from './zigzag-section.component';

describe('ZigzagSectionComponent', () => {
  let component: ZigzagSectionComponent;
  let fixture: ComponentFixture<ZigzagSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZigzagSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZigzagSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
