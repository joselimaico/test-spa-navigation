import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('app-element', myElement);
  }
  ngDoBootstrap() {}
}
