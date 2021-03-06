import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { AdminAddEngineerComponent } from './dashboard/admin-dashboard/admin-add-engineer/admin-add-engineer.component';
import { AdminViewAccountComponent } from './dashboard/admin-dashboard/admin-view-account/admin-view-account.component';
import { AdminEditSubscriptionComponent } from './dashboard/admin-dashboard/admin-edit-subscription/admin-edit-subscription.component';
import { AdminAddManagerComponent } from './dashboard/admin-dashboard/admin-add-manager/admin-add-manager.component';
import { ChooseLoginComponent } from './choose-login/choose-login.component';
import { UserDashboardContainerComponent } from './dashboard/user-dashboard/user-dashboard-container/user-dashboard-container.component';
import { AdminDashboardContainerComponent } from './dashboard/admin-dashboard/admin-dashboard-container/admin-dashboard-container.component';
import { AdminSubscriptionComponent } from './dashboard/admin-dashboard/admin-subscription/admin-subscription.component';
import { AdminPostComponent } from './dashboard/admin-dashboard/admin-post/admin-post.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';

import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginMethodComponent } from './apply-now/login-method.component';
import { AdminGuard } from './admin-guard';
import { CartComponent } from './dashboard/user-dashboard/cart/cart.component';
import { UserSubscriptionComponent } from './dashboard/user-dashboard/user-subscription/user-subscription.component';
import { UserProfileComponent } from './dashboard/user-dashboard/user-profile/user-profile.component';
import { UserAccountComponent } from './dashboard/user-dashboard/user-account/user-account.component';
import { UserSubscriptionDetailsComponent } from './dashboard/user-dashboard/user-subscription-details/user-subscription-details.component';
import { NewPasswordComponent } from './new-password/new-password.component';

const routes: Routes = [
  {path:'',component:PostListComponent},
  {path:'choose-login',component:ChooseLoginComponent},
  // {path:'job/:id',component:PostDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-post',component:AdminPostComponent},
  {path:'job/details/:id',component:LoginMethodComponent},
  {path:'password-reset-form',component:PasswordResetFormComponent},
  {path:'change-password/:id',component:NewPasswordComponent},
  {path:'admin-dashboard',component:AdminDashboardContainerComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'admin-dashboard/account',component:AdminViewAccountComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'admin-dashboard/add-manager',component:AdminAddManagerComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'admin-dashboard/add-engineer',component:AdminAddEngineerComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'admin-dashboard/add-post',component:AdminPostComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'admin-dashboard/edit-subscription/:id',component:AdminEditSubscriptionComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'admin-dashboard/view-subscription',component:AdminSubscriptionComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'user-dashboard',component:UserDashboardContainerComponent,canActivate:[AuthGuard]},
  {path:'user-dashboard/add-resource',component:PostDetailsComponent,canActivate:[AuthGuard]},
  {path:'user-dashboard/view-resource',component:UserSubscriptionComponent,canActivate:[AuthGuard]},
  {path:'user-dashboard/edit-profile',component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'user-dashboard/cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'user-dashboard/view-resource/:id',component:UserSubscriptionDetailsComponent,canActivate:[AuthGuard]},
  {path:'test',component:UserAccountComponent}

];                          

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard,AdminGuard]
})
export class AppRoutingModule { }
