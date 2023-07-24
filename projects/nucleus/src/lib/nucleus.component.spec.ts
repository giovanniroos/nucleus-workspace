import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleusComponent } from './nucleus.component';

describe('NucleusComponent', () => {
  let component: NucleusComponent;
  let fixture: ComponentFixture<NucleusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NucleusComponent]
    });
    fixture = TestBed.createComponent(NucleusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
