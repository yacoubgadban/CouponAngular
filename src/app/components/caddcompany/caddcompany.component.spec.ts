import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddcompanyComponent } from './caddcompany.component';

describe('CaddcompanyComponent', () => {
  let component: CaddcompanyComponent;
  let fixture: ComponentFixture<CaddcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaddcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaddcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
