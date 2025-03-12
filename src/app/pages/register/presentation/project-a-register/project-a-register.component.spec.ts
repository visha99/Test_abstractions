import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectARegisterComponent } from './project-a-register.component';

describe('ProjectARegisterComponent', () => {
  let component: ProjectARegisterComponent;
  let fixture: ComponentFixture<ProjectARegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectARegisterComponent]
    });
    fixture = TestBed.createComponent(ProjectARegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
