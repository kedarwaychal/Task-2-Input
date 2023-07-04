import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRemoteComponent } from './control-remote.component';

describe('ControlRemoteComponent', () => {
  let component: ControlRemoteComponent;
  let fixture: ComponentFixture<ControlRemoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlRemoteComponent]
    });
    fixture = TestBed.createComponent(ControlRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
