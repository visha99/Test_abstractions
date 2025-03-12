import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBRegisterComponent } from './project-b-register.component';

describe('RegisterComponent', () => {
  let component: ProjectBRegisterComponent;
  let fixture: ComponentFixture<ProjectBRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBRegisterComponent]
    });
    fixture = TestBed.createComponent(ProjectBRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
