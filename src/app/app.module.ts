import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* My modules */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';

/* Pages */
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
