import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FillerPage } from './filler.page';

describe('FillerPage', () => {
  let component: FillerPage;
  let fixture: ComponentFixture<FillerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FillerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
