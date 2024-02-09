import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaismixComponent } from './maismix.component';

describe('MaismixComponent', () => {
  let component: MaismixComponent;
  let fixture: ComponentFixture<MaismixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaismixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaismixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
