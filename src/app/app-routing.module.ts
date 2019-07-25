import { UserDashboardContainerComponent } from './dashboard/user-dashboard/user-dashboard-container/user-dashboard-container.component';
import { AdminDashboardContainerComponent } from './dashboard/admin-dashboard/admin-dashboard-container/admin-dashboard-container.component';
import { AdminSubscriptionComponent } from './dashboard/admin-dashboard/admin-subscription/admin-subscription.component';
import { AdminPostComponent } from './dashboard/admin-dashboard/admin-post/admin-post.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginMethodComponent } from './login-method/login-method.component';
import { AdminGuard } from './admin-guard';

const routes: Routes = [
  {path:'',component:PostListComponent},
  {path:'job/:id',component:PostDetailsComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-post',component:AdminPostComponent},
  {path:'job/details/:id',component:LoginMethodComponent},
  {path:'test',component:AdminSubscriptionComponent},
  {path:'admin-dashboard',component:AdminDashboardContainerComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'user-dashboard',component:UserDashboardContainerComponent,canActivate:[AuthGuard]}
];                          

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard,AdminGuard]
})
export class AppRoutingModule { }
