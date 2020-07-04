import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FacilitatorComponent } from './facilitator/facilitator.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { MyhomepageComponent } from './myhomepage/myhomepage.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'loginsuccess',canActivate:[AuthGuard],component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'facilitator',component:FacilitatorComponent},
  {path:'createcourse',component:CreatecourseComponent},
  {path:'myhomepage',canActivate:[AuthGuard],component:MyhomepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
