import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* My modules */
import { AppRoutingModule } from './app-routing.module';
import { AdminCareerPrincipalModule } from './modules/admin-career-principal/admin-career-principal.module';

/* Components */
import { AppComponent } from './app.component';

/* Pages */
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminCareerPrincipalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
