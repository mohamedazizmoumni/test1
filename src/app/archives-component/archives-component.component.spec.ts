import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesComponentComponent } from './archives-component.component';

describe('ArchivesComponentComponent', () => {
  let component: ArchivesComponentComponent;
  let fixture: ComponentFixture<ArchivesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivesComponentComponent]
    });
    fixture = TestBed.createComponent(ArchivesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
