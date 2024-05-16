import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterView1Component } from './master-view1.component';

describe('MasterView1Component', () => {
  let component: MasterView1Component;
  let fixture: ComponentFixture<MasterView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterView1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
