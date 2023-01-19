import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKnowledgeBaseSectionComponent } from './view-knowledge-base-section.component';

describe('ViewKnowledgeBaseSectionComponent', () => {
  let component: ViewKnowledgeBaseSectionComponent;
  let fixture: ComponentFixture<ViewKnowledgeBaseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKnowledgeBaseSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKnowledgeBaseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
