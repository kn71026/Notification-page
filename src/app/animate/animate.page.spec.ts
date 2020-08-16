import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimatePage } from './animate.page';

describe('AnimatePage', () => {
  let component: AnimatePage;
  let fixture: ComponentFixture<AnimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
