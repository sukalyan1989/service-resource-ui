import { HttpStatus,HTTPListener } from "./services/loader.service";
import { AuthInterceptor } from "./auth-interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CKEditorModule } from "ng2-ckeditor";
import {ReactiveFormsModule} from '@angular/forms'

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ConfirmationComponent } from "./dashboard/user-dashboard/confirmation/confirmation.component";
import { HeaderComponent } from "./header/header.component";
import { AdminPostComponent } from "./dashboard/admin-dashboard/admin-post/admin-post.component";
import { LoginMethodComponent } from "./apply-now/login-method.component";
import { AdminSubscriptionComponent } from "./dashboard/admin-dashboard/admin-subscription/admin-subscription.component";
import { UserSubscriptionComponent } from "./dashboard/user-dashboard/user-subscription/user-subscription.component";
import { ContactAdminComponent } from "./dashboard/user-dashboard/contact-admin/contact-admin.component";
import { UserViewSubscriptionComponent } from "./dashboard/user-dashboard/user-view-subscription/user-view-subscription.component";
import { UserDashboardContainerComponent } from "./dashboard/user-dashboard/user-dashboard-container/user-dashboard-container.component";
import { AdminDashboardContainerComponent } from "./dashboard/admin-dashboard/admin-dashboard-container/admin-dashboard-container.component";
import { LoaderComponent } from "./loader/loader.component";
import { LoaderInterceptor } from "./loader-interceptor";
import { AdminRemoveJobComponent } from "./dashboard/admin-dashboard/admin-remove-job/admin-remove-job.component";
import { UserAccountComponent } from "./dashboard/user-dashboard/user-account/user-account.component";
import { UserProfileComponent } from './dashboard/user-dashboard/user-profile/user-profile.component';
import { ChooseLoginComponent } from './choose-login/choose-login.component';
import { CartComponent } from './dashboard/user-dashboard/cart/cart.component';
import { AdminNavComponent } from './dashboard/admin-dashboard/admin-nav/admin-nav.component';
import { UserNavComponent } from './dashboard/user-dashboard/user-nav/user-nav.component';
import { AdminAddManagerComponent } from './dashboard/admin-dashboard/admin-add-manager/admin-add-manager.component';
import { AdminEditSubscriptionComponent } from './dashboard/admin-dashboard/admin-edit-subscription/admin-edit-subscription.component';
import { AddToCartComponent } from './dashboard/user-dashboard/add-to-cart/add-to-cart.component';
import { AdminViewAccountComponent } from './dashboard/admin-dashboard/admin-view-account/admin-view-account.component';
import { AdminUserDetailsComponent } from './dashboard/admin-dashboard/admin-user-details/admin-user-details.component';
import { MyfilterPipe } from './myfilter.pipe';
import { UserSubscriptionDetailsComponent } from './dashboard/user-dashboard/user-subscription-details/user-subscription-details.component';
import { UserFilterPipe } from './user-filter.pipe';
import { PostFilterPipe } from './post-filter.pipe';
import { AdminAddEngineerComponent } from './dashboard/admin-dashboard/admin-add-engineer/admin-add-engineer.component';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { NewPasswordComponent } from './new-password/new-password.component';
const RxJS_Services = [HTTPListener, HttpStatus];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    LoginComponent,
    SignupComponent,
    ConfirmationComponent,
    HeaderComponent,
    AdminPostComponent,
    LoginMethodComponent,
    AdminSubscriptionComponent,
    UserSubscriptionComponent,
    ContactAdminComponent,
    UserViewSubscriptionComponent,
    UserDashboardContainerComponent,
    AdminDashboardContainerComponent,
    LoaderComponent,
    AdminRemoveJobComponent,
    UserAccountComponent,
    UserProfileComponent,
    ChooseLoginComponent,
    CartComponent,
    AdminNavComponent,
    UserNavComponent,
    AdminAddManagerComponent,
    AdminEditSubscriptionComponent,
    AddToCartComponent,
    AdminViewAccountComponent,
    AdminUserDetailsComponent,
    MyfilterPipe,
    UserSubscriptionDetailsComponent,
    UserFilterPipe,
    PostFilterPipe,
    AdminAddEngineerComponent,
    PasswordResetFormComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // MatProgressSpinnerModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
  
  ],
  providers: [
    ...RxJS_Services,
    {provide:HTTP_INTERCEPTORS,useClass:HTTPListener,multi:true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
