import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontactdialogComponent } from './createcontactdialog.component';

describe('CreatecontactdialogComponent', () => {
  let component: CreatecontactdialogComponent;
  let fixture: ComponentFixture<CreatecontactdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecontactdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontactdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
