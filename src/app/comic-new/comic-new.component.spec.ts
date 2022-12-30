import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicNewComponent } from './comic-new.component';

describe('ComicNewComponent', () => {
  let component: ComicNewComponent;
  let fixture: ComponentFixture<ComicNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
