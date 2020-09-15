import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsPage } from './polls.component';

describe('PollsComponent', () => {
  let component: PollsPage;
  let fixture: ComponentFixture<PollsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
