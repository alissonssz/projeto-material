import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArquivosComponent } from './upload-arquivos.component';

describe('UploadArquivosComponent', () => {
  let component: UploadArquivosComponent;
  let fixture: ComponentFixture<UploadArquivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadArquivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
