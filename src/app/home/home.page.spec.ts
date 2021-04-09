import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MyComponentModule } from '../my-component/my-component.module';

import { HomePage } from './home.page';

fdescribe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), ScrollingModule, MyComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  fit('should create', fakeAsync(() => {
    // This is from https://github.com/angular/components/blob/master/src/cdk/scrolling/virtual-scroll-viewport.spec.ts#L935-L948
    // Essentially it causes the virtual scroll to render its items
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    flush();

    expect(component).toBeTruthy();
  }));
});
