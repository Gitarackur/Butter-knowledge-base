import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForSectionsComponent } from './header-for-sections.component';

describe('HeaderForSectionsComponent', () => {
  let component: HeaderForSectionsComponent;
  let fixture: ComponentFixture<HeaderForSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderForSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
