import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontactdialogComponent } from './updatecontactdialog.component';

describe('UpdatecontactdialogComponent', () => {
  let component: UpdatecontactdialogComponent;
  let fixture: ComponentFixture<UpdatecontactdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecontactdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontactdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
