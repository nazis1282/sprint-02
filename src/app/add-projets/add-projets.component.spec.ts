import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjetsComponent } from './add-projets.component';

describe('AddProjetsComponent', () => {
  let component: AddProjetsComponent;
  let fixture: ComponentFixture<AddProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProjetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
