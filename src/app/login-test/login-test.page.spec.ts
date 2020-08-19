import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginTestPage } from './login-test.page';

describe('LoginTestPage', () => {
  let component: LoginTestPage;
  let fixture: ComponentFixture<LoginTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
