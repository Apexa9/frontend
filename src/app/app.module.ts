import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FacilitatorComponent } from './facilitator/facilitator.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { MyhomepageComponent } from './myhomepage/myhomepage.component';
import { AuthGuard } from './auth.guard';
import { CoserviceService } from './services/coservice.service';
import { EnrollcourseComponent } from './enrollcourse/enrollcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FacilitatorComponent,
    CreatecourseComponent,
    MyhomepageComponent,
    EnrollcourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    AuthGuard,
    CoserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
