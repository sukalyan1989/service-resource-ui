import { LoaderService } from "./loader.service";
import { AuthInterceptor } from "./auth-interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CKEditorModule } from "ng2-ckeditor";
//import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
import { LoginMethodComponent } from "./login-method/login-method.component";
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
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MatProgressSpinnerModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
