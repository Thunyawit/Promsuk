import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MizunoComponent } from './mizuno.component';

describe('MizunoComponent', () => {
  let component: MizunoComponent;
  let fixture: ComponentFixture<MizunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MizunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MizunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
