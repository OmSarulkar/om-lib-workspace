import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaruLibComponent } from './saru-lib.component';

describe('SaruLibComponent', () => {
  let component: SaruLibComponent;
  let fixture: ComponentFixture<SaruLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaruLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaruLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
