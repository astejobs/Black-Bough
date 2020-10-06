import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenBannerComponent } from './women-banner.component';

describe('WomenBannerComponent', () => {
  let component: WomenBannerComponent;
  let fixture: ComponentFixture<WomenBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
