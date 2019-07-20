import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:PostListComponent},
  {path:'job/:id',component:PostDetailsComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
