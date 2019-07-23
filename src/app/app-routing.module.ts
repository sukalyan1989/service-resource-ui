import { AdminPostComponent } from './dashboard/admin-dashboard/admin-post/admin-post.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:PostListComponent},
  {path:'job/:id',component:PostDetailsComponent,canActivate:[AuthGuard]},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-post',component:AdminPostComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
