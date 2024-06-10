import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetodoComponent } from './practicetodo.component';

describe('PracticetodoComponent', () => {
  let component: PracticetodoComponent;
  let fixture: ComponentFixture<PracticetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticetodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
