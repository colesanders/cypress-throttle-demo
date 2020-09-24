import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThrottlePage } from './throttle.page';

describe('ThrottlePage', () => {
  let component: ThrottlePage;
  let fixture: ComponentFixture<ThrottlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThrottlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
